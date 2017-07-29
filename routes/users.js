'use strict'
const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const auth = require('../helpers/helper')

/* GET users listing. */
router.post('/', auth, controller.createUser);
router.get('/', controller.getAllUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', auth, controller.deleteUser);
router.get('/:id', controller.getOneUser);

module.exports = router;
