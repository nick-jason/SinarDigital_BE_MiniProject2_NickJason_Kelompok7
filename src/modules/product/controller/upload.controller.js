const express = require('express');
const router = express.Router();
const prisma = require('../../../helpers/db');
const path = require('path');
const fs = require('fs');

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

router.get("/", (req, res) => {
  res.render('upload');
});

router.post("/", upload.single('image'), (req, res) => {
  res.send('File uploaded successfully ');
});

module.exports = router;