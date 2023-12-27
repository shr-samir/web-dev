CREATE TABLE orders (
    orderId serial PRIMARY KEY,
    customerId int REFERENCES customers(customerId),
    employeeId int REFERENCES employees(employeeId),
    orderDate date,
    shipperId int REFERENCES shippers(shipperId)
);


