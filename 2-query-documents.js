// select * from customers where _id = 'doni';
db.customers.find({
    _id: 'doni'
});

// select * from customers where name = 'lalu doni setiawan'
db.customers.find({
    name: 'lalu doni setiawan'
});

// select * from products where price = 2000
db.products.find({
    price: 2000,
});

// select * from orders where items.produt_id = 1

db.orders.find({
    'items.product_id': 1
});