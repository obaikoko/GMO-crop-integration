import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import cropRoutes from './routes/cropRoutes.js';

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/crops', cropRoutes);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => console.log(`Server running on ${port}`));
