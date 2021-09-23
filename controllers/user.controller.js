const models = require('../models');
const bcrypt = require('bcryptjs');
const Validator = require('fastest-validator');

function createUser(req, res) {
    models.User.findOne({where: {email: req.body.email}}).then(result => {
        if (result) {
            res.status(409).json({
                message: "Email already exists",
            });
        } else {
            bcrypt.genSalt(10, function(err, salt) {    
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    const user = {
                        name: req.body.name,
                        last_name: req.body.last_name,
                        phone: req.body.phone,
                        role: req.body.role,
                        image: req.body.image,
                        email: req.body.email,
                        password: hash
                    }

                    const schema = {
                        name: {type:"string", optional: false, min: "1"},
                        last_name: {type:"string", optional: false, min: "1"},
                        phone: {type:"number", optional: false},
                        image: {type:"string", optional: true},
                        role: {type: "string", optional: false, enum: ["user", "admin", "root"]},
                        email: {type: "string", optional: false, min: "10"},
                        password: {type: "string", optional: false, min: "8"}
                    }
                
                    const v = new Validator();
                    const validationResponse = v.validate(user, schema);
                
                    if(validationResponse != true) {
                        return res.status(400).json({
                            message: "Validation failed",
                            error: validationResponse
                        });
                    }                    
                
                    models.User.create(user).then(result => {
                        res.status(201).json({
                            message: "User created successfully",
                        });
                    }).catch(error => {
                        res.status(500).json({
                            message: "Cannot create the user",
                        });
                    });
                });
            });                
        }
    }).catch(error => {
        res.status(500).json({
            message: "Cannot create the user",
        });
    });
}

function getUserById(req, res) {
    const id = req.params.id;
    
    models.User.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Cannot found the user"
        });
    });
}

function getUsers(req, res) {
    models.User.findAll().then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Cannot found the users"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Cannot list the users"
        });
    });
}

function updateUserById(req, res) {
    bcrypt.genSalt(10, function(err, salt) {    
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const id = req.params.id;
            const updatedUser = {
                name: req.body.name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                role: req.body.role,
                image: req.body.image,
                email: req.body.email,
                password: hash
            }

            const schema = {
                name: {type:"string", optional: false, min: "1"},
                last_name: {type:"string", optional: false, min: "1"},
                phone: {type:"number", optional: false},
                image: {type:"string", optional: true},
                role: {type: "string", optional: false, enum: ["user", "admin", "root"]},
                email: {type: "string", optional: false, min: "10"},
                password: {type: "string", optional: false, min: "8"}
            }  
            
            const v = new Validator();
            const validationResponse = v.validate(updatedUser, schema);

            if(validationResponse != true) {
                return res.status(400).json({
                    message: "Validation failed",
                    error: validationResponse
                });
            }
            
            models.User.update(updatedUser, {where: {id: id}}).then(result => {
                res.status(201).json({
                    message: "User information updated successfully",
                    service: updatedUser
                });
            }).catch(error => {
                res.status(500).json({
                    message: "Cannot update the user information",
                    error: error
                });
            });            
        });
    });    
}

function deleteUserById(req, res) {
    const id = req.params.id;

    models.User.destroy({where: {id : id}}).then(result => {
        res.status(201).json({
            message: "User deleted successfully",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Cannot delete the user information",
            error: error
        });
    });
}

module.exports = {
    createUser: createUser,
    getUserById: getUserById,
    getUsers: getUsers,
    updateUserById: updateUserById,
    deleteUserById: deleteUserById  
}