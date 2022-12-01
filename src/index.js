import express from 'express';
import morgan from 'morgan';
import { PORT } from './config';
import paymentRoutes from './routes/payment.routes';

const app = express()

app.use(morgan('dev'));

app.use(paymentRoutes);

app.listen(PORT);
console.log('Server on port', PORT);