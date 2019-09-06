const router = require('express').Router();
const userController = require('./../../controllers/userController');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

// /api/todo

router.route('/')
    .get(authMiddleware.requireAuth, userController.getUser)

router.route('/profile')
    .post(userController.makeUserProfile)

router.route("/fetchprofile")
    .get(userController.fetchUserProfile)


router.route('/fetchprofiles')
    .get(userController.fetchUserProfiles)

router.route('/changestatusone')
    .put(userController.changeStatusOne)

router.route('/changestatustwo')
    .put(userController.changeStatusTwo)

router.route('/approve')
    .post(userController.approve)

router.route('/reject')
    .put(userController.reject)




module.exports = router;