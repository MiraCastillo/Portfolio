const express = require("express")

var app = express();

app.use(express.static(__dirname));

app.listen(3000, console.log("Zombies to fight on port 3000"))