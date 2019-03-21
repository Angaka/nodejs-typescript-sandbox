import express = require('express');
import * as t from 'dimoba-log'

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res, next) {
  console.log('Hello World!')
  res.send('Hello World!');
  next('loeel');
  if (Object.values(t.LogLevel).includes(3))
    console.log('Test');
  const l = new t.Log(4, 121212, "lol")
  console.log('lol ' + JSON.stringify(l))
});

// app.use(function (txt:string, req, res, next) {
//   console.log(`msg is: ${txt}`);
// })

app.get('/process_get', function(req, res) {
  console.log('process_get')
  res.send('Process get');
})

const server = app.listen(8080, function () {
  console.log(`Example app listening`);
});
console.log('start')