const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const writeRoutes = require('./server/write');

const app = express();
const port = 3000;


// 정적 파일 제공
app.use(express.static(path.join(__dirname, '/front')));


// 요청 본문 파싱
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// /write 경로의 요청을 writeRoutes로 처리
app.use('/write', writeRoutes);




// ------------------------------------------------
//app.listen(port, () => {
//  console.log(`Listening on ${port}`);
//});

app.listen(3000,'0.0.0.0', function() {
	console.log('listening on 3000')
});
