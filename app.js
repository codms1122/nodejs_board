const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const listRoutes = require('./server/list');
const writeRoutes = require('./server/write');
const deleteRoutes = require('./server/delete');

const app = express();
const port = 3000;


// 정적 파일 제공
app.use(express.static(path.join(__dirname, '/front')));

// EJS 템플릿 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'front', 'board')); // EJS 파일 경로



// 요청 본문 파싱
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//
app.get('/', (req, res) => {
	//res.send('Hello World!');
	res.redirect('/list');
});

app.use('/list', listRoutes);

// /write 경로의 요청을 writeRoutes로 처리
app.use('/write', writeRoutes);

app.use('/delete', deleteRoutes);




// ------------------------------------------------
//app.listen(port, () => {
//  console.log(`Listening on ${port}`);
//});

app.listen(3000,'0.0.0.0', function() {
	console.log('listening on 3000')
});
