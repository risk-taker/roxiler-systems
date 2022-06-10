const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ status: 1 });
})

router.get('/todos', controller.todos);
router.get('/user/:id', controller.user);
module.exports = router;