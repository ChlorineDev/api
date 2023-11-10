import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import catRoute from './routes/cat.js';
import mainRouter from './routes/main.js';

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.use(mainRouter);
app.use('/cat', catRoute);

export default app;