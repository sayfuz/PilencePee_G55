const express = require('express');
const servicesController = require('../controllers/service.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin], servicesController.createService);
router.get('/list', servicesController.getServices);
router.get('/find/:id', servicesController.getServiceById);
router.patch('/update/:id', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin], servicesController.updateServiceById);
router.delete('/delete/:id', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isAdmin], servicesController.deleteServiceById);

module.exports = router;