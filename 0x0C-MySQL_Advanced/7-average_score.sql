-- 7. Average score 
-- SQL script that creates a stored procedure 
-- ComputeAverageScoreForUser that computes and
-- store the average score for a student.
-- Note: An average score can be a decimal
DROP PROCEDURE IF EXISTS ComputeAverageScoreForUser;
DELIMITER $$
CREATE PROCEDURE ComputeAverageScoreForUser(IN user_id INT)
BEGIN
    DECLARE aux FLOAT;
    SET aux = (SELECT AVG(score) FROM corrections AS correction WHERE correction.user_id=user_id);
    UPDATE users SET average_score = aux WHERE id=user_id;
END
$$
DELIMITER ;
