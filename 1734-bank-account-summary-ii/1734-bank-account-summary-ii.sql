# Write your MySQL query statement below

select U.name, Sum(T.amount) as balance
from Users U join Transactions T
on U.account = T.account
group by T.account
Having Sum(T.amount) > 10000