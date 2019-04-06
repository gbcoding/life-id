var express = require('express');
var indexRouter = express.Router();

const loginRouter = require('./loginRouter');
const signupRouter = require('./signupRouter');

//Route requests
indexRouter.use('/login', loginRouter); 
indexRouter.use('/signup', signupRouter);

/* GET home page. */
indexRouter.get('/', function(req, res, next) {

  console.log("Homepage Accessed");
});

module.exports = indexRouter;
