const router = require('express').Router();
const userController = require('./../../controllers/userController');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/todo

router.route('/')
    .get(authMiddleware.requireAuth, userController.getUser)

router.route('/profile')
    .post(userController.makeUserProfile)
    // .get(userController.getUserProfile)
router.route("/fetchprofile")
    .get(userController.fetchUserProfile)




module.exports = router;