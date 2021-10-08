const express = require('express');
const servicesController = require('../controllers/service.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', servicesController.createService); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]
router.get('/list', servicesController.getServices);
router.get('/find/:id', servicesController.getServiceById);
router.patch('/update/:id', servicesController.updateServiceById); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]
router.delete('/delete/:id', servicesController.deleteServiceById); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin]

module.exports = router;