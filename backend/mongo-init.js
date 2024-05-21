db = connect('mongodb://localhost:27017/shopping_ms_customer');
db.createCollection('nothing');
db = connect('mongodb://localhost:27017/shopping_ms_products');
db.createCollection('nothing');
db = connect('mongodb://localhost:27017/shopping_ms_shopping');
db.createCollection('nothing');
