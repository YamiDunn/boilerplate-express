require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/json",(req, res) => {
    const response = {"message":""};    
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.statusCode = 200;
        response.message = "Hello Json".toUpperCase();
    }else {
        res.statusCode = 201;
        response.message = "Hello json";
    };
    return res.json(response);
});


app.use("/public", express.static(__dirname + "/public"));

































 module.exports = app;
