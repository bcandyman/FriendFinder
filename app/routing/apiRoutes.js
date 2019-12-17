var profiles = require('../data/friends.js')

module.exports = function (app) {

    app.get("/api/profiles", function (req, res) {
        return res.json(profiles);
    });

    app.post('/survey', function (req, res) {

        friends.push(req.body)
        console.log(friends)
        res.json(friends);
    });
}

