create table suppliers (
	supplierId serial primary key,
	supplierName varchar(50),
	contactName varchar(50),
	address varchar(100),
	city varchar(100),
	postalCode varchar(20),
	country varchar(50),
	phone varchar(30)
)