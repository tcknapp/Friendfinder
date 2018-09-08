//Required
var path = require("path");
var friendsData = require("../data/friends");

//Routing
module.exports = function (app) {

    //GET route with the url /api/friends. 
    //This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    //POST routes /api/friends. This will be used to handle incoming survey results. 
    //This route will also be used to handle the compatibility logic.

    app.post("/api/friends", function (req, res) {
        // This will be used to handle incoming survey results. 
        // This route will also be used to handle the compatibility logic.
        // Use 'totalDIfference' example
        var newMatch = req.body;
        var topMatch;
        var totalDiff;
        var newDiff;

        for (var i = 0; i < friendsData.length; i++) {
            totalDiff = 0;

            for (var k = 0; k < 10; k++) {
                totalDiff = totalDiff + Math.abs((parseInt(newMatch.scores[k]) - friendsData[i].scores[k]));
            }

            if (i === 0) {
                topMatch = 0;
                newDiff = totalDiff;
            } 
            else 
            {
            if (totalDiff < newDiff) {
                topMatch = i;
                newDiff = totalDiff;
                }
            }
        }
        //Push to DB, show Best Match
        friendsData.push(newMatch);
        res.send(friendsData[topMatch]);
    });


};


