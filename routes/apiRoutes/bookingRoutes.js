const router = require('express').Router();
const bookingController = require('./../../controllers/bookingController')

router.route('/')
    .post(bookingController.booking)

module.exports=router