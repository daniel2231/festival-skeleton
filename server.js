const express = require('express');
const app = express();
const port = 3000
//포트를 자유롭게 바꿔 주셔도 됩니다.//

app.use(express.static(__dirname + '/public'));

var router = require('./router')

app.use(router);

app.listen(port, () => console.log(`listening on port ${port}! localhost:${port}으로 접속하세요.`));
