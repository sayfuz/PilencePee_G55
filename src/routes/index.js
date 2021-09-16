const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/sobre-proyecto', (req, res) => {
    res.render('about-us');
});

router.get('/contacto', (req, res) => {
    res.render('contact');
});

module.exports = router;