const express = require('express');
const { fetchAllAlerts } = require('../controller/Alert');


const router = express.Router();

router.get('/', fetchAllAlerts)
       

exports.router = router;