const express = require('express');
const app = express();
app.use(express.json());

let posts = [];
let id = 1;

// CREATE
app.post('/posts', (req, res) => {
    const post = { id: id++, title: req.body.title, content: req.body.content };
    posts.push(post);
    res.status(201).json(post);
});

// READ
app.get('/posts', (req, res) => res.json(posts));
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Not found');
    res.json(post);
});

// UPDATE
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Not found');
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

// DELETE
app.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(3000, () => console.log('Blog API listening on port 3000'));
