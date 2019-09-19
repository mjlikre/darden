
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const moment = require('moment')
const db = require('./../models');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID_KEY, process.env.TWILIO_AUTH_TOKEN);

module.exports = {
    booking: async (req, res) =>{
        const {service, place, date, hour, name, email, phone, clientId, providerId, price, darden, tax, total, description, confirm, bookingId } = req.body
        try{
            const booking = new db.Bookings({service, place, date, hour, name, email, phone, clientId, providerId, price, darden, tax, total, description, confirm, bookingId })
            await booking.save();
            // const firstMatch = await db.ApprovedUserProfile.find({'lat' : place.coordinates.lat, 'lng' : place.coordinates.lng}) //need to figure out how to match with people within 0.0050 longitude and latitude,
            // let matched = []
            const firstMatch = await db.ApprovedUserProfile.find() //This is a problem here, even though i found out how many people are there who is around, but i did it by simply finding
            //everyone, i need a better way to find people
            let matched = []
            firstMatch.map(matches=>{
                if (parseFloat(matches.lat) > (parseFloat(place.coordinates.lat) - 0.005)
                    && parseFloat(matches.lat) < (parseFloat(place.coordinates.lat) + 0.005)
                    && parseFloat(matches.lng) > (parseFloat(place.coordinates.lng) - 0.005)
                    && (parseFloat(matches.lng) < parseFloat(place.coordinates.lng) + 0.005)){
                    matched.push(matches)

                }
            })

            await matched.map(users=>{
                users.skills.map(skill=>{
                    if(skill === service){
                        if (matched.length < 3){
                            matched.push(users)
                        }
                    }
                })
            })
            await matched.map(user=>{
                client.messages
                    .create({
                        body: `Hey, a client just made a booking with booking number: ${bookingId} and he wants needs a ${service} for ${hour} hour on ${moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")} at ${place.place}, and the pay will be $${price}. If you would like to accept this job, respond to this text with "YES" plus the booking number ${bookingId}, like this: 'YES ${bookingId}'`,
                        from: process.env.TWILIO_PHONE_NUMBER,
                        to: user.phone
                    })
                    .then(message => console.log(message.sid));
            })
            await res.json('success')
        }catch(e){
            res.status(404).json(e)
        }
    },
    seekerBookings: async (req, res)=>{

        try {
            const myOrders = await db.Bookings.find({"clientId": req.query.id})
            let orderedOrders = []
            myOrders.map(order=>{
                let eachOrder = {
                    time: moment(order.date).unix(),
                    booking: order
                }
                orderedOrders.push(eachOrder)
            })
            function compareValues(key, order='asc') {
                return function(a, b) {
                    if(!a.hasOwnProperty(key) ||
                        !b.hasOwnProperty(key)) {
                        return 0;
                    }

                    const varA = (typeof a[key] === 'string') ?
                        a[key].toUpperCase() : a[key];
                    const varB = (typeof b[key] === 'string') ?
                        b[key].toUpperCase() : b[key];

                    let comparison = 0;
                    if (varA > varB) {
                        comparison = 1;
                    } else if (varA < varB) {
                        comparison = -1;
                    }
                    return (
                        (order == 'desc') ?
                            (comparison * -1) : comparison
                    );
                };
            }
            orderedOrders.sort(compareValues("time", "desc"))

            await res.json(orderedOrders)
        }catch(e){
            await res.json(e)
        }

    },
    providerBookings: async (req ,res) =>{
        try {
            const myOrders = await db.Bookings.find({"providerId": req.query.id})
            await res.json(myOrders)
        }catch(e){
            await res.json(e)
        }
    }
}