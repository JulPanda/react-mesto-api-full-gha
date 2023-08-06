/* eslint-disable no-console */
const express = require('express');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const { cors } = require('./middlewares/cors');
const NotFoundError = require('./errors/notFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { SERVER_PORT, DB_MANGO } = require('./utils/config');

const app = express();

const errorHandler = require('./middlewares/errorHandler');
const router = require('./routes');

mongoose.connect(DB_MANGO);

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

app.listen(SERVER_PORT, () => {
  console.log('Сервер запущен');
});
