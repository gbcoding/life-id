var express = require('express');
var scanRouter = express.Router();

scanRouter.get('/', function(req, res){


    res.send({
        serverMessage: "Data from scanRouter"
    });
});


scanRouter.post('/', function(req, res){

    res.send({
        serverMessage: "Data from scanRouter"
    });
});

module.exports = scanRouter;