

const db = require('./../models');

module.exports = {
    booking: async (req, res) =>{
        console.log('hey')
        const {service, place, date, hour, name, email, phone, clientId, price, darden, tax, total, description, confirm, bookingId } = req.body
        try{
            const booking = new db.Bookings({service, place, date, hour, name, email, phone, clientId, price, darden, tax, total, description, confirm, bookingId })
            await booking.save();
            const firstMatch = await db.ApprovedUserProfile.find({'lat' : place.coordinates.lat, 'lng' : place.coordinates.lng}) //need to figure out how to match with people within 0.0050 longitude and latitude,
            let matched = []

            firstMatch.map(users=>{
                users.skills.map(skill=>{
                    if(skill === service){
                        if (matched.length < 3){
                            matched.push(users)
                        }

                    }
                })
            })
            await matched.map(user=>{

            })
            console.log(matched.data)
            await res.json('success')
        }catch(e){
            res.status(404).json(e)
            console.log('something went wrong')
        }



    }
}