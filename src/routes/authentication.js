const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

router.get('/registro', (req, res) => {
    res.render('sign-up.html', { title: 'Registro' });
});

router.post('/registro', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/ingresar', (req, res, next) => {
    res.render('login.html', { title: 'Iniciar sesión' })
});

router.post('/ingresar', (req, res) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    }) (req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/ingresar');
});

module.exports = router;