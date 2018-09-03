//Dependencies
var path = require("path");

//Routing
module.exports = function (app) {

    // HTML GET Requests
    //GET Route to /survey which should display the survey page.
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // default, catch-all route that leads to home.html which displays the home page.
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

};