import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import books from './data/books.js';

const port = process.env.PORT || 5001 ;
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find((b) => b._id === req.params.id);
    res.json(book);
});

app.listen(port, () => console.log(`Server running on port ${port}`));