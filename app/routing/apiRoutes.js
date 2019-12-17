var profiles = require('../data/friends.js')

module.exports = function (app) {

    app.get("/api/profiles", function (req, res) {
        res.json(profiles);
    });

    app.post('/survey', function (req, res) {

        profiles.push(req.body)
        console.log(profiles)
        res.json(profiles);
    });
}

