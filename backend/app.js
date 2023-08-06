/* eslint-disable no-console */

const express = require('express');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { cors } = require('./middlewares/cors');
const NotFoundError = require('./errors/notFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');

mongoose.connect(DB_URL);

app.use(express.json());

app.use(cookieParser());
app.use(cors);

app.use(requestLogger); // подключаем логгер запросов

// Краш-тест сервера
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(router);

app.use(errorLogger); // подключаем логгер ошибок
app.use('*', (req, res, next) => {
  next(new NotFoundError('Запрашиваемый адрес не существует'));
});

app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log('Сервер запущен');
});
