var friendData = require("../data/friend");

// ROUTING
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.post("/api/clear", function (req, res) {
        // Empty out the arrays of data
        friendData.length = [];

        res.json({
            ok: true
        });
    });
};