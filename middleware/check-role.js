const models = require('../models');

function isRoot(req, res, next){
    models.User.findOne({where: {id: req.userData.user_id}}).then(user => {
        if (user == null) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            if (user.role === "root") {
                next();
            } else {
                res.status(401).json({
                    message: "Not authorized"
                });                
            }
        }
    }).catch(error => {
        res.status(500).json({
            message: "User not found"
        });
    });    
}

function isAdmin(req, res, next){
    models.User.findOne({where: {id: req.userData.user_id}}).then(user => {
        if (user == null) {
            res.status(401).json({
                message: "Not authorized"
            });
        } else {
            if (user.role === "admin") {
                next();
            } else {
                res.status(401).json({
                    message: "Not authorized"
                });                
            }
        }
    }).catch(error => {
        res.status(500).json({
            message: "User not found"
        });
    });      
}

module.exports = {
    isRoot: isRoot,
    isAdmin: isAdmin
}