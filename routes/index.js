const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.tooeleTech);



//student router
routes.use('/students', require('./student'))

//ben router
routes.use('/ben',require('./ben'))


module.exports = routes;
