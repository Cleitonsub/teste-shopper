import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRouter.js';

const app = express();
app.use(express.json());

app.use(cors());

app.use('/products', productsRouter)

app.use(express.static('public'));

export default app;