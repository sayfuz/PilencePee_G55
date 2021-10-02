const models = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Validator = require('fastest-validator');

function signUp(req, res) {    
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
                        role: null,
                        image: null,
                        email: req.body.email,
                        password: hash
                    }

                    const schema = {
                        name: {type:"string", optional: false, min: "1"},
                        last_name: {type:"string", optional: false, min: "1"},
                        phone: {type:"number", optional: false},
                        image: {type:"string", optional: true},
                        role: {type: "string", optional: false, default: "user"},
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

function signIn(req, res) {
    models.User.findOne({where: {email: req.body.email}}).then(user => {
        if (user == null) {
            res.status(401).json({
                message: "Invalid credentials"
            });
        } else {
            bcrypt.compare(req.body.password, user.password, function(err, result) {
                if (result) {
                    const token = jwt.sign({
                        email: user.email,
                        user_id: user.id
                    }, process.env.JWT_KEY, 
                    {
                        expiresIn: 86400
                    }, 
                    function(err, token) {
                        res.status(200).json({
                            message: "Authentication successful",
                            token: token
                        });
                    });
                } else {
                    res.status(401).json({
                        message: "Invalid credentials"
                    });                    
                }
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Invalid credentials"
        });
    });
}

module.exports = {
    signUp: signUp,
    signIn: signIn
}