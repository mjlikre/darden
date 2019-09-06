const router = require('express').Router();
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');
const paymentController = require('./../../controllers/paymentController')



router.route('/')
    .post(paymentController.bookingPayment)

module.exports = router;