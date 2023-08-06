require('dotenv').config();
// переменные окружения из .env
const {
  NODE_ENV, JWT_SECRET, DB_URL, PORT,
} = process.env;

// переменные с дефолтными значениями
const DEV_SECRET = 'secret-key';
const DEV_DB_URL = 'mongodb://127.0.0.1:27017/mestodb';
const DEV_PORT = 3000;

const DB_MANGO = NODE_ENV === 'production' && DB_URL ? DB_URL : DEV_DB_URL;

const SERVER_PORT = NODE_ENV === 'production' && PORT ? PORT : DEV_PORT;

const SECRET = NODE_ENV === 'production' && JWT_SECRET ? JWT_SECRET : DEV_SECRET;

module.exports = {
  DB_MANGO, SERVER_PORT, SECRET,
};
