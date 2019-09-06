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
    console.log(req.body)
    const {id, firstname, lastname, phone, address, email, lat, lng, skills, status, date } = req.body;

    try {
      const userProfile = new db.UserProfile( {id, firstname, lastname, phone, address, email, lat, lng, skills, status, date
      } );
      await userProfile.save();
    } catch(e) {
      console.log(e)
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
  },
  fetchUserProfiles: async (req, res) =>{
    try{
      const userProfilesOne = await db.UserProfile.find({status: 1})
      const userProfilesTwo = await db.UserProfile.find({status: 2})
      const userProfilesThree = await db.UserProfile.find({status: 3})
      const userProfilesZero = await db.UserProfile.find({status: 0})
      await res.json([userProfilesOne, userProfilesTwo, userProfilesThree, userProfilesZero])
    }catch(e){
      await res.json(e)
    }
  },

  changeStatusOne: async (req, res) =>{
    try{
      console.log(req.body)
      await db.UserProfile.updateOne(
          { id : req.body.id},
          { $set: { status : 2}}
      );
    }catch (e){
      await res.json(e)
    }
  },
  changeStatusTwo: async (req, res) =>{
    try{
      console.log(req.body)
      await db.UserProfile.updateOne(
          { id : req.body.id},
          { $set: { status : 3}}
      );
    }catch (e){
      await res.json(e)
    }
  },
  approve: async (req, res) =>{
    console.log(req.body)
    const {id, firstname, lastname, phone, email, lat, lng, skills, address } = req.body;

    try {
      const userProfile = new db.ApprovedUserProfile( {id, firstname, lastname, phone, email, lat, lng, skills, address });
      await userProfile.save();
      await db.UserProfile.remove({id: req.body.id})
    } catch(e) {
      console.log(e)
      res.status(404).json({ e });
    }
  },
  reject: async (req, res) =>{
    try{
      console.log(req.body)
      await db.UserProfile.deleteOne({id: req.body.id})
    }catch (e){
      await res.json(e)
    }
  }
}


