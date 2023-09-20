const express = require('express');
const { fetchAllAgencies } = require('../controller/Agency');


const router = express.Router();

router.get('/', fetchAllAgencies)
       

exports.router = router;