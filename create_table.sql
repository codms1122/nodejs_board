-- 사용자 테이블
CREATE TABLE user (
    userId VARCHAR(100) PRIMARY KEY,        
    userName VARCHAR(100) NOT NULL,       
    userPw VARCHAR(255) NOT NULL,         
    createdTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,     
    lastModifiedTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 게시글 테이블
-- CONTENT_BLOCK과 합침
CREATE TABLE post ( 
    postId INT AUTO_INCREMENT PRIMARY KEY,  
    userId VARCHAR(100) NOT NULL,                    
    postTitle VARCHAR(255) NOT NULL,        
    postContent TEXT NOT NULL,
    sFilename VARCHAR(255), --저장될 파일명
    oFilename VARCHAR(255), --실제 파일명
    createdTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,        
    lastModifiedTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES user(userId) ON DELETE CASCADE   
);

CREATE TABLE comment (
  comment_id INT(100) PRIMARY KEY AUTO_INCREMENT,
  user_id INT(100) NOT NULL,
  post_id INT NOT NULL,
  content_text VARCHAR(255) NOT NULL,
  createdTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,        
  lastModifiedTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES user(userId) ON DELETE CASCADE  
  FOREIGN KEY (postId) REFERENCES post(postId) ON DELETE CASCADE
);


