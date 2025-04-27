# Write your MySQL query statement below

select user_id, email from users 
WHERE email regexp '^[a-zA-Z0-9]+@[a-zA-Z]+.com$'
order by user_id

-- select * from Users where email LIKE '%@%'and email LIKE '%.com%';

