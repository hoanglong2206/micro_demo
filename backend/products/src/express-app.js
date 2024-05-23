const express = require("express");
const cors = require("cors");
const { products } = require("./api");
const HandleErrors = require("./utils/error-handler");
const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const { CLIENT_URL } = require("./config");

module.exports = async (app, channel) => {
  // app.use(
  //   cors({
  //     origin: CLIENT_URL,
  //     credentials: true,
  //   })
  // );
  app.use(cors());
  app.use(cookieParser());
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(bodyParser.json())
  app.use(express.json());
  app.use(express.urlencoded({ extended: false, limit: "1mb" }));
  app.use(express.static(__dirname + "/public"));

  //listeners
  // appEvents(app);
  //api
  products(app, channel);

  // error handling
  app.use(HandleErrors);
};
