const dotEnv = require("dotenv");

// if (process.env.NODE_ENV.trim() !== 'prod') {
//   const configFile = `./.env.${process.env.NODE_ENV.trim()}`;
//   dotEnv.config({ path: configFile });
// } else {
//   dotEnv.config();
// }
dotEnv.config();


const dbConfig = {
  host: process.env.MONGODB_HOST,
  collection: process.env.MONGODB_COLLECTION
}
db_url = `mongodb://${dbConfig.host}/${dbConfig.collection}`;

const brokerConfig  = {
  host: process.env.MESSAGE_BROKER_HOST,
  port: process.env.MESSAGE_BROKER_PORT, 
}
let broker_url = `amqp://${brokerConfig.host}:${brokerConfig.port}`;


module.exports = {
  PORT: process.env.PORT,
  DB_URL: db_url,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: broker_url,
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  CUSTOMER_BINDING_KEY: "CUSTOMER_SERVICE",
  QUEUE_NAME: "CUSTOMER_QUEUE"
};
