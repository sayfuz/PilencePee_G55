const express = require('express');
const servicesController = require('../controllers/service.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', checkAuthMiddleware.checkAuth, servicesController.createService); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]
router.get('/list', servicesController.getServices);
router.get('/find/:id', servicesController.getServiceById);
router.patch('/update/:id', checkAuthMiddleware.checkAuth, servicesController.updateServiceById); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]
router.delete('/delete/:id', checkAuthMiddleware.checkAuth, servicesController.deleteServiceById); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]

module.exports = router;