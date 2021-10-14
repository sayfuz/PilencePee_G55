const express = require('express');
const usersController = require('../controllers/user.controller');
const checkAuthMiddleware = require('../middleware/check-auth');
const checkRoleMiddleware = require('../middleware/check-role');

const router = express.Router();

router.post('/add', checkAuthMiddleware.checkAuth, usersController.createUser); // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.get('/list', checkAuthMiddleware.checkAuth, usersController.getUsers);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.get('/find/:id', checkAuthMiddleware.checkAuth, usersController.getUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.patch('/update/:id', checkAuthMiddleware.checkAuth, checkAuthMiddleware.checkAuth, usersController.updateUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]
router.delete('/delete/:id', checkAuthMiddleware.checkAuth, checkAuthMiddleware.checkAuth, usersController.deleteUserById);  // [checkAuthMiddleware.checkAuth, checkRoleMiddleware.isRoot]

module.exports = router;