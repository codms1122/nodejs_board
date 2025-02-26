// write.js
const express = require('express');
const path = require('path');
const router = express.Router();
const multer = require('multer'); // 파일 업로드를 위한 라이브러리
const connection = require('./db'); // db.js에서 데이터베이스 연결 가져오기

// 파일 저장 설정
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, './files')); // 파일 저장 경로 설정
    },
    filename: (req, file, cb) => {
        const timestamp = Date.now(); // 현재 날짜 및 시간 값
        const o_filename = file.originalname;
        const s_filename = `${timestamp}_${o_filename}`; // 새 파일명
        cb(null, s_filename);
    }
});

// multer 설정
const upload = multer({ storage });




// 게시글 작성 (GET /write)
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../front/board/write.html'));
	console.log('[get] write success');
});


// 게시글 작성 (POST /write)
router.post('/', upload.single('file'), (req, res) => {
	//const { title, content, file } = req.body;
	const { title, content } = req.body;
	const file = req.file; // 업로드된 파일 정보
	console.log('req.body:', req.body);
	console.log('req.file:', req.file);
	//res.send('post ok');

	// 파일명이 존재하면 경로를 저장, 아니면 null 처리
	const o_filename = file ? file.originalname : null
	const s_filename = file ? file.filename : null;

	//임시 user_id
	const user_id = "test"
	
	const query = `
		INSERT INTO post (userId, postTitle, postContent, sFilename, oFilename)
		VALUES (?, ?, ?, ?, ?)
	`;

	connection.execute(query, [user_id, title, content, s_filename, o_filename], (err, results) => {
		if (err) {
			console.error('Error inserting data: ' + err.stack);
			res.status(500).send('Database error');
			return;
		}
		//res.status(201).send('Post created!');
		res.sendFile(path.join(__dirname, '../front/board/list.html'));
	});
			   
  
});


// 이 파일에서 router를 내보냄
module.exports = router;
