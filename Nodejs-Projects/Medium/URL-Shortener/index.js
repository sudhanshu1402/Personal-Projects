const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dns = require('dns');

app.use(bodyParser.urlencoded({ extended: false }));

const urls = [];
let id = 1;

app.post('/api/shorturl', (req, res) => {
    const url = req.body.url;
    // Basic validation
    try {
        const myURL = new URL(url);
        dns.lookup(myURL.hostname, (err) => {
            if (err) return res.json({ error: 'invalid url' });
            urls.push({ original_url: url, short_url: id });
            res.json({ original_url: url, short_url: id++ });
        });
    } catch (e) {
        res.json({ error: 'invalid url' });
    }
});

app.get('/api/shorturl/:short_url', (req, res) => {
    const short = parseInt(req.params.short_url);
    const found = urls.find(u => u.short_url === short);
    if (found) res.redirect(found.original_url);
    else res.json({ error: 'No short URL found' });
});

app.listen(3000, () => console.log('URL Shortener listening on port 3000'));
