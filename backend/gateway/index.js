const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const dotEnv = require("dotenv");

dotEnv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use("/customer", proxy(process.env.CUSTOMER_URL));
app.use("/shopping", proxy(process.env.SHOPPING_URL));
app.use("/products", proxy(process.env.PRODUCTS_URL));

app.listen(process.env.PORT, () => {
  console.log("Gateway is Listening to Port 8000");
});
