const db = require('./../models');

module.exports = {
    booking: async (req, res) =>{
        console.log('hey')
        const {service, place, date, hour, name, email, phone, clientId, price, darden, tax, total, description,   confirm } = req.body
        try{
            const booking = new db.Bookings({service, place, date, hour, name, email, phone, clientId, price, darden, tax, total, description,  confirm })
            await booking.save();
            await res.json('success')
        }catch(e){
            res.status(404).json(e)
            console.log('something went wrong')
        }
    }
}