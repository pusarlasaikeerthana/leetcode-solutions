# Write your MySQL query statement below

-- select E.employee_id, E.name, S.salary from Employees E inner join Salaries S
-- on E.employee_id = S.employee_id

select employee_id from Employees where employee_id not in (select employee_id from Salaries) 
Union
select employee_id from Salaries where employee_id  not in (select employee_id from Employees) 
order by employee_id
