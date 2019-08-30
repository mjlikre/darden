const db = require('./../models');

module.exports = {
    fetchAdmin: async (req, res) => {
        let params = req.query.id
        try{
            console.log(params)
            const admin = await db.Admin.find({id: params})
            await console.log(admin)
            await res.json("Authorized")
        }catch(e){
            await res.json(e)
        }
    }
}

