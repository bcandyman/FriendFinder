var friends = require('../data/friends.js')

module.exports = function (app) {

    app.get("/", function (req, res) {

    });

    app.post('/survey', function (req, res) {

        friends.push(req.body)
        console.log(friends)
        res.json(friends);
    });
}

