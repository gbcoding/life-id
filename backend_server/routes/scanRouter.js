const express = require('express');
const scanRouter = express.Router();
const MedRec1 = require('../MedRec1.json');
const MedRec2 = require('../MedRec2.json');
const MedRec3 = require('../MedRec3.json');


var UUID;
scanRouter.use((req, res, next) => {
    var url = req.originalUrl; 
    console.log('endpoint hit: ', url);
    var urltoken = url.split("/");
    UUID = urltoken[2];
    console.log('uuid: ', UUID);

    next();
});

scanRouter.get('/04d21c22993c80', (req, res) => {
    console.log ("Entered /scan/04d21c22993c80");
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

scanRouter.post('/', function(req, res){

    res.send({
        serverMessage: "Data from scanRouter"
    });
});

module.exports = scanRouter;