const express = require('express');
const services = require('../controllers/service.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/add', checkAuthMiddleware.checkAuth, services.add);
router.get('/list', services.list);
router.get('/find/:id', services.find);
router.patch('/update/:id', checkAuthMiddleware.checkAuth, services.update);
router.delete('/delete/:id', checkAuthMiddleware.checkAuth, services.del);

module.exports = router;