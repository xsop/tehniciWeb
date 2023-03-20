const express = require("express");

const app = express();
console.log("Folder proiect: " + __dirname);

app.set("view engine", "ejs");

app.use("/resurse", express.static(__dirname + "/resurse"));

app.get("/ceva", function(req, res) {
    console.log("cale: " + req.url);
    res.send("altceva" + req.ip);
})


app.get(["/index","/","/home"], function(req, res) {
    res.render("pagini/index", {ip: req.ip, a: 10, b: 20});
})

app.get("/despre", function(req, res) {
    res.render("pagini/despre");
})
app.listen(8080);
console.log("Serverul a pornit pe portul 8080");

