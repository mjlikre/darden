const db = require('./../models');

module.exports = {
    booking: async (req, res) =>{
        const {service, location, time, hours, name, email, phone, user_id} = req.body
        try{
            const booking = new db.Bookings({service, location, time, hours, name, email, phone, user_id})
            await booking.save();
        }catch(e){
            res.status(404).json(e)
        }
    }
}