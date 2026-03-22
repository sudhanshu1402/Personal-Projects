const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    if (!req.file) return res.status(400).send('No file uploaded');
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    });
});

app.get('/', (req, res) => {
    res.send(`
    <form action="/api/fileanalyse" method="post" enctype="multipart/form-data">
      <input type="file" name="upfile">
      <input type="submit">
    </form>
  `);
});

app.listen(3000, () => console.log('File Metadata Microservice listening on port 3000'));
