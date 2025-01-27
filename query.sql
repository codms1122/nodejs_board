-- 게시판 목록 
SELECT postId, userId, postTitle, createdTime FROM post;

-- 글쓰기
INSERT INTO post (userId, postTitle, postContent, sFilename, oFilename)
VALUES ("user_id", "post_title", "post_content", "s_filename", "o_filename")

-- 글 수정
UPDATE post
SET
    postTitle = "post_title",
    postContent = "post_content",
    sFilename = "s_filename",
    oFilename = "o_filename",
    lastModifiedTime = NOW()
WHERE postId = "post_id"

-- 로그인
SELECT count(*) AS cnt FROM user WHERE userId = "user_id" AND userPw = "user_pw";

if cnt == 1:
    return 'success'
else:
    return 'fail'

-- 마이페이지
SELECT userId, userName FROM user;