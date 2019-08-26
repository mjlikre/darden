const router      = require('express').Router();
const authRoutes  = require('./authRoutes');
// const userData = require('./userData')
const userRoutes = require('./userRoutes')

const matchRoutes = require('./matchRoutes')


const passportService = require('./../../services/passport');

const authMiddleware = require('./../../middlewares/authMiddlewares');
// / api prepended to these routes

router.route('/test')
  .get(authMiddleware.requireAuth, (req, res) => {
    res.send(req.user);
  });

router.use('/auth', authRoutes);
// router.use('/data', userData)
router.use('/user', userRoutes );

router.use('/services', matchRoutes)

module.exports = router;