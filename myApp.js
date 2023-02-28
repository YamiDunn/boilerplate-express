//const mySecret = process.env['MESSAGE_STYLE'];
require('dotenv').config();
let express = require('express');
let app = express();
console.log("Hello World");

app.get("/",(req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

/*
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
});*/

/*
app.get("/json",(req, res, next) => {
const response = req.method + " " + req.path + " - " + req.ip;
console.log(response);
next();
});*/

app.get("/now", (req, res, next) => {
req.time = new Date().toString();
next();
}, (req, res) => {
    res.send({"time" : req.time});
});

app.get("/:word/echo", (req,res,next)=> {
    req.params = {"echo" : "word"}
    res.send(req.params);
} );

app.use("/public", express.static(__dirname + "/public"));

































 module.exports = app;
