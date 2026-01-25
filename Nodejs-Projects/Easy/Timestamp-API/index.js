const express = require('express');
const app = express();

app.get('/api/:date?', (req, res) => {
    let date = req.params.date;
    let parsedDate;

    if (!date) {
        parsedDate = new Date();
    } else {
        // Check if unix timestamp
        if (!isNaN(date)) {
            parsedDate = new Date(parseInt(date));
        } else {
            parsedDate = new Date(date);
        }
    }

    if (parsedDate.toString() === 'Invalid Date') {
        res.json({ error: 'Invalid Date' });
    } else {
        res.json({
            unix: parsedDate.getTime(),
            utc: parsedDate.toUTCString()
        });
    }
});

app.listen(3000, () => {
    console.log('Timestamp API listening on port 3000');
});
