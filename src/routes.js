const express = require('express');
const routes = express.Router();    

const ProductController = require('./controllers/ProductController');

router.get('/', (req, res, next) => {
    res.status(200).send({ 
        tittle: "Node Store API", 
        version: "0.0.2",
        name: "Dev+"
    });
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;