const dotEnv = require("dotenv");

if (process.env.NODE_ENV.trim() !== 'prod') {
  const configFile = `./.env.${process.env.NODE_ENV.trim()}`;
  dotEnv.config({ path: configFile });
} else {
  dotEnv.config();
}


const dbConfig = {
  username: process.env.MONGODB_USERNAME,
  password: process.env.MONGODB_PASSWORD,
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT, 
}
let db_url;
if(dbConfig.username != ""){
  db_url = `mongodb://${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}`
}else{
  db_url = process.env.MONGODB_URI
}
const brokerConfig  = {
  username: process.env.MESSAGE_BROKER_USERNAME,
  password: process.env.MESSAGE_BROKER_PASSWORD,
  host: process.env.MESSAGE_BROKER_HOST,
  port: process.env.MESSAGE_BROKER_PORT, 
  vhost: process.env.MESSAGE_BROKER_VHOST
}
let broker_url;
broker_url = `amqp://${brokerConfig.username}:${brokerConfig.password}@${brokerConfig.host}:${brokerConfig.port}/${brokerConfig.vhost}`
module.exports = {
  PORT: process.env.PORT,
  DB_URL: db_url,
  APP_SECRET: process.env.APP_SECRET,
  MESSAGE_BROKER_URL: broker_url,
  EXCHANGE_NAME: "ONLINE_SHOPPING",
  CUSTOMER_BINDING_KEY: "CUSTOMER_SERVICE",
  QUEUE_NAME: "CUSTOMER_QUEUE"
};