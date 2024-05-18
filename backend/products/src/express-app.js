const express = require('express');
const cors  = require('cors');
const {products, appEvents } = require('./api');
const HandleErrors = require('./utils/error-handler')
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

module.exports = async (app, channel) => {
    app.use(cors());
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json())
    // app.use(express.json())
    // app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(express.static(__dirname + '/public'))
    
    //listeners
    // appEvents(app);
    //api
    products(app, channel);

    // error handling
    app.use(HandleErrors);
    
}