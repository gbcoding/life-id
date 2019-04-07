var express = require('express');
var directoryRouter = express.Router();

directoryRouter.get('/', function(req, res){

    res.send({
        serverMessage: "Data from directory Router"
    });

});


directoryRouter.post('/', function(req, res){

    res.send({
        serverMessage: "Data from directory Router"
    });
});




module.exports = directoryRouter;