const routes = require('express').Router();


routes.route('/api/categories').get((req, res)=> res.json("Get response from categories"));


module.exports = routes;