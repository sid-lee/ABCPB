import express from 'express';
import books from './data/books.js';

const port = 5001 ;
const app = express();

app.get('/', (req, res) => {
    res.send('API is running...')
});

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`Server running on port ${port}`));