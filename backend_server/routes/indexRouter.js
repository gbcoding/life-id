var express = require('express');
var indexRouter = express.Router();

const loginRouter = require('./loginRouter');
const signupRouter = require('./signupRouter');
const scanRouter = require('./scanRouter');
const editRouter = require('./editRouter');

//Route requests
indexRouter.use('/login', loginRouter); 
indexRouter.use('/signup', signupRouter);
indexRouter.use('/scan', scanRouter);
indexRouter.use('/edit', editRouter);

/* GET home page. */
indexRouter.get('/', function(req, res, next) {

  console.log("Homepage Accessed");
});

module.exports = indexRouter;
