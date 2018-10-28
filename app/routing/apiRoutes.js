var friendArray = require("../data/friend");

// ROUTING
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendArray);
    });


    app.post("/api/friends", function (req, res) {
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