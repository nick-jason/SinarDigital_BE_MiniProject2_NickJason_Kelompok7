const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const fs = require('fs');
const prisma = require('@prisma/client');
const uploadController = require('./src/modules/product/controller/upload.controller');

app.set('view engine', 'ejs');

const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/images/');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '-' + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use(express.json());

// routes
require('./src/routes/api')(app);

app.get("/", (req, res) => {
  res.send('Server is up and running');
});

app.use('/home', (req, res) => {
  res.send('Welcome to the Home Page');
});
app.use('/upload', uploadController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
    console.log(`Server is running on http://localhost:${port}/upload`);
    console.log(`Server is running on http://localhost:${port}/api/v1/products`);
});