const router = require('express').Router();
const matchController = require('./../../controllers/matchController');

router.route('/match')
    .get(matchController.getMatch)

module.exports = router;