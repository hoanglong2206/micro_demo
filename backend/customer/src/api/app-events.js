const CustomerService = require("../services/customer-service");

module.exports = (app) => {
    const service = new CustomerService();
    app.use('/app-events', async (req, res, next) => {
        try {
            const {payload} = req.body;
            console.log("===== Customer Service Received Event=====");
            service.SubscribeEvents(payload);
            return res.status(200).json(payload);
        } catch (err) {
            next(err);
        }
    });
}