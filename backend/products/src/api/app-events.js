const ProductService = require('../services/product-service');

module.exports = (app) => {
    const service = new ProductService();
    app.use('/app-events', async (req, res, next) => {
        try {
            const {payload} = req.body;
            console.log("===== Product Service Received Event=====");
            return res.status(200).json(payload);
        } catch (err) {
            next(err);
        }
    });
}