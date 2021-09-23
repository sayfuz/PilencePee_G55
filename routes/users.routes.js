const express = require('express');
const usersController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot], usersController.createUser);
router.get('/list', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot], usersController.getUsers);
router.get('/find/:id', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot], usersController.getUserById);
router.patch('/update/:id', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot], checkAuthMiddleware.checkAuth, usersController.updateUserById);
router.delete('/delete/:id', [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot], checkAuthMiddleware.checkAuth, usersController.deleteUserById);

module.exports = router;