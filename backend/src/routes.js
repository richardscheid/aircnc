const express = require('express');

const routes = express.Router();

// req.query = Access to query params (like filters)
// req.params = Acces to route params (like edit, delete)
// req.body = Access to requisition body (like create, edit)

routes.put('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;