const router = require('express').Router();
const bookingController = require('./../../controllers/bookingController')

router.route('/')
    .post(bookingController.booking)

router.route('/seekerbookings')
    .get(bookingController.seekerBookings)

router.route('providerbookings')
    .get(bookingController.providerBookings)

module.exports=router