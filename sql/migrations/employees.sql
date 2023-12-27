create table Employees (
	employeeId serial primary key,
	lastName varchar(50),
	firstName varchar(50),
	birthDate date,
	photo bytea,
	notes text
)

