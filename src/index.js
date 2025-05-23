require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { uploadFile } = require('./upload');

const upload = multer({ dest: 'uploads/' });
const app = express();

app.use(express.static('public'));

app.post('/subir', upload.single('foto'), async (req, res) => {
    try {
        const bucketName = 'mi-bucket';
        const filePath = req.file.path;
        const fileName = req.file.originalname;
        await uploadFile(bucketName, filePath, fileName);
        res.send('Archivo subido con éxito');
    } catch (error) {
        res.status(500).send('Error al subir el archivo');
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});