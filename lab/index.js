const express = require("express");
const app = express();
console.log("Folder proiect: " + __dirname);

app.get("/ceva", function(req, res) {
    res.send("altceva");
})

app.get("/index.html", function(req, res) {
    res.sendFile(__dirname + "/index2.html");
})

app.listen(3000);
console.log("Serverul a pornit pe portul 3000");

