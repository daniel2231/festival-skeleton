
const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/public'));

var router = require('./router')

app.use(router);

app.listen(port, () => console.log(`listening on port ${port}!`));

console.log('Node.js web server at port 5000 is running...')