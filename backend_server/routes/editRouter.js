var express = require('express');
var editRouter = express.Router();

editRouter.get('/', function(req, res){

    res.send({
        serverMessage: "Data from editRouter"
    });

});


editRouter.post('/', function(req, res){

    res.send({
        serverMessage: "Data from editRouter"
    });
});




module.exports = editRouter;