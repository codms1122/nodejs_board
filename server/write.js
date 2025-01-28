// write.js
const express = require('express');
const path = require('path');
const router = express.Router();

// db.js에서 데이터베이스 연결 가져오기
const connection = require('./db');


// 게시글 작성 (GET /write)
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../front/board/write.html'));
	console.log('[get] write success');
});


// 게시글 작성 (POST /write)
router.post('/', (req, res) => {
	const { title, content } = req.body;
	console.log(req.body);
	res.send('post ok');
  
  
});


// 이 파일에서 router를 내보냄
module.exports = router;
