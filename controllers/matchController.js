const db = require('./../models');

module.exports = {
    getMatch : async (req, res) =>{
        console.log(req.body)
        try {

            await res.json({ matched });
        } catch (e) {
            await res.json(e)
        }
    }
}

/* first iteration of the matching algorithm, the runtime is O(N) for firstMatch, where n stands for the amount of users in the database.
then to find the matches base on skills it will take O(n^2) time due to the double map method to iterate through the list of users that got
first matched and their respective list of skills. Not the most ideal, but how can i make it better? */

/* If I can somehow capture the data before its sent to the database, and sent it as a get request from *idk where* to the backend of this app,
then i can return the data to the message twillio app and ask it to return those numbers */
