const express = require('express');
const editRouter = express.Router();
const MedRec1 = require('../MedRec1.json');
const MedRec2 = require('../MedRec2.json');
const MedRec3 = require('../MedRec3.json');


var UUID;
editRouter.use((req, res, next) => {
    var url = req.originalUrl; 
    console.log('endpoint hit: ', url);
    var urltoken = url.split("/");
    UUID = urltoken[2];
    console.log('uuid: ', UUID);

    next();
});

editRouter.get('/04d21c22993c80', (req, res) => {
    console.log ("Entered /scan/04d21c22993c80");
    res.send(MedRec1);
});

editRouter.get('/1589e9ac', function(req, res)
{
    res.send(MedRec2);
});

editRouter.get('/04496b6aa0480', function(req, res)
{
    res.send(MedRec3);
});

editRouter.post('/', function(req, res){

    res.send({
        serverMessage: "Data from editRouter"
    });
});




module.exports = editRouter;