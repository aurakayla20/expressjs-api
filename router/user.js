const express = require('express');
const router = express.Router();
const usercontroller = require('../controller/users');

router.get('/user', usercontroller.index);
router.post('/user', usercontroller.store);
router.get('/user/:id', usercontroller.show);
router.put('/user/:id', usercontroller.update);
router.delete('/user/:id', usercontroller.delete);

module.exports = router