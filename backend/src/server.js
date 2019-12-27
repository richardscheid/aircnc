const express = require('express');

const app = express();

app.use(express.json());

// req.query = Access to query params (like filters)
// req.params = Acces to route params (like edit, delete)
// req.body = Access to requisition body (like create, edit)

app.put('/users/:id', (req, res) => {
    return res.json(req.body);
});
 
app.listen(3030);

 