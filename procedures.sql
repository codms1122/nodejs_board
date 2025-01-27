DELIMITER $$

-- 게시판 목록 조회 프로시저
CREATE PROCEDURE GetPostList()
BEGIN
    SELECT postId, userId, postTitle, createdTime 
    FROM post;
END$$

-- 글쓰기 프로시저
CREATE PROCEDURE WritePost(
    IN p_userId VARCHAR(255), 
    IN p_postTitle VARCHAR(255), 
    IN p_postContent TEXT, 
    IN p_sFilename VARCHAR(255), 
    IN p_oFilename VARCHAR(255)
)
BEGIN
    INSERT INTO post (userId, postTitle, postContent, sFilename, oFilename)
    VALUES (p_userId, p_postTitle, p_postContent, p_sFilename, p_oFilename);
END$$

-- 글 수정 프로시저
CREATE PROCEDURE UpdatePost(
    IN p_postId INT,
    IN p_postTitle VARCHAR(255), 
    IN p_postContent TEXT, 
    IN p_sFilename VARCHAR(255), 
    IN p_oFilename VARCHAR(255)
)
BEGIN
    UPDATE post
    SET
        postTitle = p_postTitle,
        postContent = p_postContent,
        sFilename = p_sFilename,
        oFilename = p_oFilename,
        lastModifiedTime = NOW()
    WHERE postId = p_postId;
END$$

-- 로그인 프로시저
CREATE PROCEDURE Login(
    IN p_userId VARCHAR(255), 
    IN p_userPw VARCHAR(255), 
    OUT p_result VARCHAR(10)
)
BEGIN
    DECLARE cnt INT;
    SELECT COUNT(*) INTO cnt
    FROM user 
    WHERE userId = p_userId AND userPw = p_userPw;

    IF cnt = 1 THEN
        SET p_result = 'success';
    ELSE
        SET p_result = 'fail';
    END IF;
END$$

-- 마이페이지 프로시저
CREATE PROCEDURE GetMyPage(
    IN p_userId VARCHAR(255)
)
BEGIN
    SELECT userId, userName 
    FROM user 
    WHERE userId = p_userId;
END$$

DELIMITER ;
