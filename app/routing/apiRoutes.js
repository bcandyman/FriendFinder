//access all friends
var friends = require('../data/friends.js');



//determines closest match to user
const findFriend = (userProfile) => {


    //initialize vars
    const myScore = getScore(userProfile);
    let closestMatch = friends[0];


    //returns total score to profile passed
    const getScore = (profile) => {
        let score = 0;

        //sum of all scores in profile
        profile.scores.forEach((val) => {
            score += parseInt(val);
        })

        return score;
    }

    //set initial difference between user and default friend
    let currentDiff = Math.abs(myScore - getScore(closestMatch));

    /*loop through friends array, testing if proposed
    friend is a better match than the current match.*/
    for (let i = 0; i < friends.length - 1; i++) {

        /*set proposedDiff to score difference between
        user and proposed friend*/
        let proposedDiff = Math.abs(myScore - getScore(friends[i]));

        //if the proposed friend is a closer match to the user
        if (proposedDiff < currentDiff) {
            //set closestMatch to proposed friend
            closestMatch = friends[i]
        }
    }

    //return object of the closest match
    return closestMatch
}



//export to make available to server.js
module.exports = function (app) {


    app.get("/api/profiles/all", function (req, res) {
        res.json(friends);
    });



    app.post('/survey', function (req, res) {

        //set user data to userProfile
        const userProfile = req.body;

        //add user data to friends array
        friends.push(userProfile);

        //find the closest match to the user
        const yourFriend = findFriend(userProfile);

        //return the closest match to the current user
        res.json(yourFriend);
    });
}