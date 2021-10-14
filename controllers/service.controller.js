const Validator = require('fastest-validator');
const models = require('../models');

function createService(req, res) {
    const service = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: null,
        user_id: 3
    }

    const schema = {
        title: {type:"string", optional: false, min: "8", max: "150"},
        description: {type: "string", optional: false, min: "8", max: "800"},
        price: {type: "number", optional: false},
        image: {type:"string", optional: true}
    }

    const v = new Validator();
    const validationResponse = v.validate(service, schema);

    if(validationResponse != true) {
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
    }

    models.Service.create(service).then(result => {
        res.status(201).json({
            message: "Service created successfully",
            service: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Cannot create the service",
            error: error
        });
    });
}

function getServiceById(req, res) {
    const id = req.params.id;
    
    models.Service.findByPk(id).then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: "Cannot found the service"
        });
    });
}

function getServices(req, res) {
    models.Service.findAll().then(result => {
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Cannot found the services"
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Cannot list the services"
        });
    });
}

function updateServiceById(req, res) {
    console.log(req.body)
    const id = req.params.id;
    const updatedService = {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: null
    }

    const schema = {
        title: {type:"string", optional: false, min: "8", max: "150"},
        description: {type: "string", optional: false, min: "8", max: "800"},
        price: {type: "number", optional: false},
        image: {type:"string", optional: true}
    }

    const v = new Validator();
    const validationResponse = v.validate(updatedService, schema);

    if(validationResponse != true) {
        return res.status(400).json({
            message: "Validation failed",
            error: validationResponse
        });
    }
    
    const user_id = 3;

    models.Service.update(updatedService, {where: {id: id, user_id: user_id}}).then(result => {
        res.status(201).json({
            message: "Service updated successfully",
            service: updatedService
        });
    }).catch(error => {
        res.status(500).json({
            message: "Cannot update the service",
            error: error
        });
    });
}

function deleteServiceById(req, res) {
    const id = req.params.id;
    const user_id = 3;

    models.Service.destroy({where: {id : id, user_id: user_id}}).then(result => {
        res.status(201).json({
            message: "Service deleted successfully",
            service: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Cannot delete the service",
            error: error
        });
    });
}

module.exports = {
    createService: createService,
    getServiceById: getServiceById,
    getServices: getServices,
    updateServiceById: updateServiceById,
    deleteServiceById: deleteServiceById  
}