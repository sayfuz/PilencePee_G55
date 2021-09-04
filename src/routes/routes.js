const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index.html', {title: 'PilencePee'})
})

router.get('/sobre-proyecto', (req, res) => {
    res.render('about-us.html', {title: 'Sobre el Proyécto'})
})

router.get('/contacto', (req, res) => {
    res.render('contact.html', {title: 'Contactanos'})
})

router.get('/ingresar', (req, res) => {
    res.render('login.html', {title: 'Ingresa'})
})

router.get('/registro', (req, res) => {
    res.render('sign-up.html', {title: 'Resgristrate'})
})

module.exports = router