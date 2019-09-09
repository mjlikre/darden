const router    = require('express').Router();
const express = require('express')
const apiRoutes = require('./apiRoutes');
const MessagingResponse = require('twilio').twiml.MessagingResponse;


const app = express()

const db = require('./../models');


// Setup API routes
// prepends /api to all of the routes declared in this file

router.use('/api', apiRoutes);





module.exports = router;