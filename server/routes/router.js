const express = require('express');
const route = express.Router();
const services = require('../services/render')
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);


route.get('/add-user', (req, res) => {
    // res.send('root');
    res.render('add_user.ejs');
})

route.get('/update-user', (req, res) => {
    // res.send('root');
    res.render('update_user.ejs');
})


//API

route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.create);

module.exports = route;