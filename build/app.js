"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Create a new express application instance
var app = express();
app.get('/', function (req, res, next) {
    console.log('Hello World!');
    res.send('Hello World!');
    next('loeel');
});
// app.use(function (txt:string, req, res, next) {
//   console.log(`msg is: ${txt}`);
// })
app.get('/process_get', function (req, res) {
    console.log('process_get');
    res.send('Process get');
});
var server = app.listen(3000, function () {
    console.log("Example app listening");
});
console.log('start');
