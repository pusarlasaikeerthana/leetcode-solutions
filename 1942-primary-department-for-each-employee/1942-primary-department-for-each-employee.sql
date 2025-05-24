# Write your MySQL query statement below
-- select Distinct employee_id, department_id
-- from Employee
-- Having primary_flag = 'y' or count(department_id) = 1
-- group by employee_id
SELECT employee_id,department_id FROM Employee WHERE primary_flag = 'Y' OR employee_id NOT IN(SELECT employee_id FROM Employee WHERE primary_flag = 'Y')

