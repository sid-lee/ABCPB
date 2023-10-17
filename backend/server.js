import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
// import orderRoutes from './routes/orderRoutes.js';

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5001 ;
const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => 
    console.log(`Server running on port ${port}`)
);