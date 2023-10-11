import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 5001 ;
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.use('/api/books', bookRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));