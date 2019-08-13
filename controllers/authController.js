const db      = require('./../models');
const jwt     = require('jwt-simple');
const config  = require('./../config');

const tokenForUser = function(user) {
  const timestamp = new Date().getTime();
  // Sub === subject
  // iat === issued at time

  // Its going to encode the whole 1st object and then add our secret to it
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
};


module.exports = {
  signUp: async (req, res) => {
    const { email, password, firstname, lastname, phone, city, usertype } = req.body;
    if(!email || !password) {
      return res.status(422).json({ error: 'You must provide an email and password' });
    }
    try {
      // Check if theres existing user
      const existingUser = await db.NewUser.findOne({ email });
      // if user exist, throw error
      if(existingUser) {
        return res.status(422).json({ error: 'Email is in use' });
      }
      const user = new db.NewUser({ email, password, firstname, lastname, phone, city, usertype });
      await user.save();
      res.json({ token: tokenForUser(user)});
    } catch(e) {
      res.status(404).json({ e });
    }
  },
  signIn: (req, res) => {
    res.send({ token: tokenForUser(req.user)});
  }
};
