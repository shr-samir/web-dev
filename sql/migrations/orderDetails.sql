create table orderDetails (
	orderDetailId serial primary key,
	orderId int references orders(orderId),
	productId int references products(productId),
	quantity int
);

