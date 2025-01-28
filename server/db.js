const mysql = require('mysql2');

// MySQL 연결 설정 (root 사용자 사용)
const connection = mysql.createConnection({
  host: 'localhost', // 데이터베이스 호스트
  user: 'board', // root 사용자
  password: 'board', // 비밀번호가 없는 경우 빈 문자열
  database: 'board' // 데이터베이스 이름
});

// 연결 확인
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// connection 객체를 모듈로 내보냄
module.exports = connection;

