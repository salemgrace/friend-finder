var friendArray = require("../data/friend");

// ROUTING
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = (req.body)
        var currentScoresArray = newFriend.scores;
        currentScoresArray = currentScoresArray.map(function (x) {
            return parseInt(x, 10);
        });
        console.log("Current Scores: " + currentScoresArray);

        for (var i = 0; i < friendArray.length; i++) {
            scoresArray = friendArray[i].scores;
            console.log("Scores Array to Check for Match: " + scoresArray);
            for (var j = 0; j < scoresArray.length; j++) {
                
            }
        }

        friendArray.push(req.body);
        res.json(true);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendArray.length = [];

        res.json({
            ok: true
        });
    });
};