const router = require('express').Router();
const adminController = require('./../../controllers/adminController')

router.route('/signin')
    .get(adminController.fetchAdmin)

module.exports = router;