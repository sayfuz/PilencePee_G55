const express = require('express');
const usersController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', usersController.createUser); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.get('/list', usersController.getUsers);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.get('/find/:id', usersController.getUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.patch('/update/:id', checkAuthMiddleware.checkAuth, usersController.updateUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.delete('/delete/:id', checkAuthMiddleware.checkAuth, usersController.deleteUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]

module.exports = router;