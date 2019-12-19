var profiles = require('../data/friends.js')

const getScore = (profile) => {
    let score = 0;

    profile.scores.forEach((val) => {
        score += parseInt(val);
    })

    return score;
}

let findFriend = (userProfile) => {

    const myScore = getScore(userProfile);
    let closestFriend = profiles[0];

    for (let i = 0; i < profiles.length - 1; i++) {
        let currentDiff = Math.abs(myScore - getScore(closestFriend));
        let proposedDiff = Math.abs(myScore - getScore(profiles[i]));

        if (proposedDiff < currentDiff) {
            closestFriend = profiles[i]
        }
    }
    return closestFriend
}


module.exports = function (app) {

    app.get("/api/profiles", function (req, res) {
        res.json(profiles);
    });

    app.post('/survey', function (req, res) {
        const userProfile = req.body;
        profiles.push(userProfile);
        const yourFriend = findFriend(userProfile);

        res.json(yourFriend);
    });
}