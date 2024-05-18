const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors  = require('cors');
const { customer } = require('./api');
const HandleErrors = require('./utils/error-handler')
// const appEvents = require('./api/app-events');
module.exports = async (app, channel) => {

    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(cookieParser());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    

    // Listen to events
    // appEvents(app);

    //api
    customer(app, channel);

    // error handling
    app.use(HandleErrors);
    
}