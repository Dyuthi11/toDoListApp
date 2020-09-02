const express = require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();

const items = ["Be a cool person", "Be kind"];
const workItems = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", function (req, res) {
    const day = date.getDate();
    // There can be only one render()
    res.render("list", {
        listTitle: day, 
        newListItems: items
    });
});

app.post("/", function (req, res) {
    const item = req.body.newItem;
    //Check if the new item in the list was for the work or the home route, by checking the value of the submit button, whose name is "list".
    
    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/Work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/Work", function(req, res) {
    res.render("list", {
        listTitle: "Work",
        newListItems: workItems
    });
});

app.get("/About", function(req, res) {
    res.render("about");
});

app.listen(3000, function () {
    console.log("Server started on Port 3000.");
});