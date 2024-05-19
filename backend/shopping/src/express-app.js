const express = require("express");
const cors = require("cors");
const { shopping, appEvents } = require("./api");
const HandleErrors = require("./utils/error-handler");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
module.exports = async (app, channel) => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );

  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(express.static(__dirname + "/public"));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));

  //api
  // appEvents(app);
  shopping(app, channel);

  // error handling
  app.use(HandleErrors);
};
