create table products (
	productId serial primary key,
	productName varchar(50),
	supplierId int references suppliers(supplierId),
	categoryId int references categories(categoryId),
	unit varchar(100), 
	price decimal(10, 2)
)


