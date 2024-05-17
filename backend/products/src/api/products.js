const ProductService = require('../services/product-service');
const { PublishMessage } = require("../utils");
const { SHOPPING_BINDING_KEY, CUSTOMER_BINDING_KEY } = require("../config")
const UserAuth = require('./middlewares/auth')

module.exports = (app, channel) => {
    
    const service = new ProductService();


    app.post('/product/create', async(req,res,next) => {
        
        try {
            // const { name, description, type, unit,price, available, suplier, banner } = req.body; 
            const { name, description, category, unit, price, inStock, brand, imageCover, size }= req.body; 
            console.log(req.body);
            // validation
            const { data } =  await service.CreateProduct({ name, description, category, unit, price, inStock, brand, imageCover, size });
            return res.json(data);
            
        } catch (err) {
            next(err)    
        }
        
    });

    app.get('/category/:category', async(req,res,next) => {
        
        const category = req.params.category;
        
        try {
            const { data } = await service.GetProductsByCategory(category)
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.get('/:id', async(req,res,next) => {
        
        const productId = req.params.id;

        try {
            const { data } = await service.GetProductDescription(productId);
            return res.status(200).json(data);

        } catch (err) {
            next(err)
        }

    });

    app.post('/ids', async(req,res,next) => {

        try {
            const { ids } = req.body;
            const products = await service.GetSelectedProducts(ids);
            return res.status(200).json(products);
            
        } catch (err) {
            next(err)
        }
       
    });
     
    app.put('/wishlist',UserAuth, async (req,res,next) => {

        const { _id } = req.user;
        console.log(_id);
        try {
            const {data} =  await service.GetProcductPayload(_id, {productId: req.body._id}, 'ADD_TO_WISHLIST');

            PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(data));
            
            return res.status(200).json(data.data.product);
        } catch (err) {
            
        }
    });
    
    app.delete('/wishlist/:id',UserAuth, async (req,res,next) => {

        const { _id } = req.user;
        const productId = req.params.id;

        try {
            const {data} =  await service.GetProcductPayload(_id, {productId}, 'REMOVE_FROM_WISHLIST');

            // PushlishCustomerService(data);
            PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(data));

            return res.status(200).json(data.data.product);
        } catch (err) {
            next(err)
        }
    });


    app.put('/cart',UserAuth, async (req,res,next) => {
        
        const { _id } = req.user;
        
        try {   
            const { data } = await service.GetProcductPayload(_id, {productId: req.body._id, qty: req.body.qty, size: req.body.size, color: req.body.color }, 'ADD_TO_CART');
            
            // PushlishCustomerService(data);
            PublishMessage(channel, SHOPPING_BINDING_KEY, JSON.stringify(data));

            // PushlishShoppingService(data);
            PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(data));
            
            const response = {
                product: data.data.product,
                unit: data.data.qty,
            }
    
            return res.status(200).json(response);
            
        } catch (err) {
            next(err)
        }
    });
    
    app.delete('/cart/:id',UserAuth, async (req,res,next) => {

        const { _id } = req.user;
        const productId = req.params.id;

        try {
            const { data } = await service.GetProcductPayload(_id, {productId}, 'REMOVE_FROM_CART');
            // PushlishCustomerService(data);
            PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(data));

            // PushlishShoppingService(data);
            PublishMessage(channel, CUSTOMER_BINDING_KEY, JSON.stringify(data));

            const response = {
                product: data.data.product,
                unit: data.data.qty,
            }           
            return res.status(200).json(response);
        } catch (err) {
            next(err)
        }
    });

    //get Top products and category
    app.get('/', async (req,res,next) => {
        //check validation
        
        try {
            const { data } = await service.GetProducts();        
            return res.status(200).json(data);
        } catch (error) {    
            next(err)
        }
        
    });
    
}