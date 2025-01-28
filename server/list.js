// write.js
const express = require('express');
const path = require('path');
const router = express.Router();
//const multer = require('multer'); // 파일 업로드를 위한 라이브러리
const connection = require('./db'); // db.js에서 데이터베이스 연결 가져오기


// 게시글 작성 (GET /list)
router.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../front/board/list.html'));
	console.log('[get] list success');
});


// 특정 게시글 읽기 (GET /list/:id)
router.get('/:id', (req, res) => {
  const post_id = req.params.id;
  const query = 'SELECT * FROM post WHERE postId = ?';
  
  connection.execute(query, [post_id], (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err.stack);
      res.status(500).send('Database error');
      return;
    }
    if (results.length === 0) {
      return res.status(404).send('Post not found');
    }
    

	//res.json(results[0]); // 첫 번째 결과만 반환
	const post = results[0];
	const user_id = "test"
	//const user_id = req.session.user_id || null; // 로그인한 사용자의 user_id (세션에서 가져오기)
	
	// EJS 템플릿에 post와 user_id 전달
	res.render('view', { post, user_id });
	console.log(results[0]);

  });
});


// 이 파일에서 router를 내보냄
module.exports = router;







// 게시글 작성 (POST /write)
/*
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
*/

