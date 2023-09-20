const express = require('express');
const { createAgency, loginAgency } = require('../controller/Auth');


const router = express.Router();
//  /auth is already added in base path
router.post('/signup', createAgency)
       .post('/login', loginAgency)

exports.router = router;