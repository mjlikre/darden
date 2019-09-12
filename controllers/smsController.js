const db = require('./../models');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = {
    Messaging: async (req, res) =>{
        console.log(req.body)
        let data = {number: req.body.From , message: req.body.Body.split(" ")[1]}
        console.log(data)
        const twiml = new MessagingResponse();
        try {
            const user = await db.ApprovedUserProfile.findOne({"phone": data.number})
            console.log(user.id)
            if (!user){
                twiml.message("Opps! Seems like you're not an Approved service provider yet, schedule an appointment to get approved or sign up to become a service provider!");
            }

            const userData = user.data
            console.log(userData)
            const checkBookingData = await db.Bookings.find({"bookingId": data.message})
            if(!checkBookingData) {
                twiml.message("Seems like you failed to respond in the correct format, make sure to respond with a 'yes' plus the booking number, separated by a space, like this: 'YES (booking number)");
            }
            if (checkBookingData.confirm === 0){
                const changeBookingData = await db.Bookings.updateOne({"bookingId": data.message}, {$set: {"providerId": user.id, "confirm": 1}})
                console.log(changeBookingData)
                twiml.message('You are booked to this user');

            }else{
                twiml.message('Oh no! Someone already picked up this order');

            }


            res.writeHead(200, {'Content-Type': 'text/xml'});
            res.end(twiml.toString());
        }catch(e){
            console.log(e)
        }
    }
}

// app.post('/sms', (req, res) => {
//     console.log(req.body)
//     const data = {number: req.body.From , message: req.body.Body.split(" ")[1]}
//     console.log(data)
//     const twiml = new MessagingResponse();
//     const Update = async (data) =>{
//         try {
//             const user = await db.UserProfile.findOne({"phone": data.number})
//             console.log(user.data.id)
//
//             const db = await db.Bookings.updateOne({"bookingId": data.message}, {"providerId": user.data.id} )
//             console.log('success')
//         }catch(e){
//             console.log(e)
//
//         }
//     }
//     Update(data).then(r => console.log(r))
//
// });