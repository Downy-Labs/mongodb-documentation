// insert customer document
db.customers.insertOne({
    _id: 'doni',
    name: 'lalu doni setiawan',
});

// cek document
db.customers.find();

// insert products
db.products.insertMany([{
        _id: 1,
        name: 'Indomie ayam bawang',
        price: new NumberLong('2000'),
    },
    {
        _id: 2,
        name: 'Indomie unta spesial',
        price: new NumberLong('5000'),
    },
]);
// cek document
db.products.find();

// insert orders
db.orders.insertOne({
    _id: new ObjectId(),
    total: new NumberLong('8000'),
    items: [{
            product_id: 1,
            price: new NumberLong('2000'),
            quantity: new NumberInt('2'),
        },
        {
            product_id: 2,
            price: new NumberLong('8000'),
            quantity: new NumberInt('2'),
        },
    ],
});

// cek document
db.orders.find();