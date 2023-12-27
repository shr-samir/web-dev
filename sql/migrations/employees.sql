create table Employees (
	employeeId serial primary key,
	lastName varchar(50),
	firstName varchar(50),
	birthDate date,
	photo varchar(100),
	notes text
)

