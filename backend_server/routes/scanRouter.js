const express = require('express');
const scanRouter = express.Router();
const MedRec1 = require('../MedRec1.json');
const MedRec2 = require('../MedRec2.json');
const MedRec3 = require('../MedRec3.json');


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

scanRouter.get('/04d221c22993c80', function(req, res)
{
    res.send(MedRec1);
});

scanRouter.get('/1589e9ac', function(req, res)
{
    res.send(MedRec2);
});

scanRouter.get('/04496b6aa0480', function(req, res)
{
    res.send(MedRec3);
});



module.exports = scanRouter;