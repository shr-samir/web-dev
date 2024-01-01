1. 
select contactname, address, city, country 
from customers 

2. 
select contactname, address, city, country 
from customers
limit 4;

3.
select customerid, contactname, address, city, country 
from customers
limit 4
offset 4;

4.
select count(customerid) 
from customers;

5.
select city, count(*) 
from customers 
group by city;

6.
select customerid, customername, contactname, address, city
from customers
where city in ('London', 'Paris', 'Madrid');

7.
select customerid, customername, contactname, address, city from customers
where city = 'London'
union
select customerid, customername, contactname, address, city from customers
where city = 'Paris'

8.
select customerid, customername, contactname, address, city from customers
where city = 'London'
union
select customerid, customername, contactname, address, city from customers
where city = 'Paris'
order by city

9.
select customerid, customername, contactname, address, city
from customers
where city in ('London', 'Paris', 'Madrid')
order by city;

10.
select customername, contactname, address
from customers 
where customerid not in (select customerid from orders);

11.
select customername, contactname, address
from customers 
where customerid in (select customerid from orders);

12.
select customername, contactname, address
from customers 
where not exists (
	select customerid
	from orders 
	where customers.customerid = orders.customerid
);

13.
select customername, contactname, address, orderid, orderdate
from customers c
inner join orders o
on c.customerid = o.customerid;

14.
select c.customername, count(o.orderid)
from customers c
inner join orders o
on c.customerid = o.customerid
group by c.customername;

15.
select 
	c.customername, c.contactname, c.address, count(o.orderid)
from customers c
inner join orders o
on c.customerid = o.customerid
group by c.customername, c.contactname, c.address
order by c.customername;

16.
select 
	c.customerid, c.customername, c.contactname, c.address, count(o.orderid)
from customers c
inner join orders o
on c.customerid = o.customerid
group by c.customerid, c.customername, c.contactname, c.address
order by c.customerid;

17.
select city
from customers c
group by city
having count(*) = 1;

18.
select c.customername, c.contactname, c.address 
from customers c
left join orders o 
on c.customerid = o.customerid
where o.customerid is null;

19.
select * from orders
where orderdate > now()

20.
update orders 
set orderdate = '1997-02-12'
where orderid = 10443;

21.
update suppliers
set country = 'Canada'
where supplierid = 29;