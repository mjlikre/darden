const db = require('./../models');

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await db.User.findById(req.user._id)
      await res.json({user});
    } catch(e) {
      await res.json(e);
    }
  },
  makeUserProfile: async (req, res) => {
    console.log('yo')
    console.log(req.body)
    const skills = req.body;
    console.log(skills)


    try {
      const userProfile = new db.UserProfile({skills});
      await userProfile.save();
    } catch(e) {
      res.status(404).json({ e });
    }
  },
  fetchUserProfile: async (req, res) =>{
    console.log(req.body)
    try {
      const userProfile = await db.UserProfile.find({id: req.body})
      await res.json(userProfile)
    }catch (e){
      await res.json(e)
    }
  }
}

