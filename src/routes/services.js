const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

router.get('/add', (req, res) => {
    res.render('services/add');
});

router.post('/add', async (req, res) => {
    const { title, description, price } = req.body;
    const newService = {
        title,
        description,
        price,
        user_id: req.user.id
    };

    await pool.query('INSERT INTO services SET ?', [newService]);
    req.flash('success', 'Service saved successfully');
    res.redirect('/services');
});

router.get('/', async (req, res) => {
    const services = await pool.query('SELECT * FROM services');
    res.render('services/list', { services });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM services WHERE ID = ?', [id]);
    req.flash('success', 'Service removed successfully');
    res.redirect('/services');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params; 
    const services = await pool.query('SELECT * FROM services WHERE id = ?', [id]);
    res.render('services/edit', {services: services[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;
    const newService = {
        title,
        description,
        price
    };

    await pool.query('UPDATE services SET ? WHERE ID = ?', [newService, id]);
    req.flash('sucess', 'Service updated successfully');
    res.redirect('/services')
});

module.exports = router;