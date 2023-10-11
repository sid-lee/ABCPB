import express from 'express';
const router = express.Router();
import { getBooks, getBookById } from '../controllers/bookController.js';
// import Book from '../models/bookModel.js'

// For mongoose using model, requires async
// router.get('/', asyncHandler( async(req, res) => {

//     const books = await Book.find({});
//     res.json(books);

// }));

// router.get('/:id', asyncHandler( 

//     async(req, res) => {
//             // passing id by url
//             const book = await Book.findById(req.params.id);

//             if (book) {
//                 // retrieval of json
//                 res.json(book);
//             } else {
//                 res.status(404);
//                 throw new Error('Resource not found');
//             }
//     })
// );

router.route('/').get(getBooks);
router.route('/:id').get(getBookById);

export default router;