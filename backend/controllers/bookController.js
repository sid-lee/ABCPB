import asyncHandler from '../middleware/asyncHandler.js';
import Book from '../models/bookModel.js' ;

// @desc Fetch all books
// @route GET/api/books
// @access Public
const getBooks = asyncHandler( async (req, res) => {

    const books = await Book.find({}) ;
    res.json( books ) ;
    
});

// @desc Fetch a book
// @route GET/api/books/:id
// @access Public
const getBookById = asyncHandler( async (req, res) => {
    
    const book = await Book.findById(req.params.id) ;

    if ( book ) {
        return res.json(book) ;
    } 
    else {
        // NOTE: this will run if a valid ObjectId but no product was found
        // i.e. product may be null
        res.status(404) ;
        throw new Error('Book not found');
    }
});

// @desc Create a book
// @route GET/api/books
// @access Private/Admin
const createBook = asyncHandler( async (req, res) => {

    const book = new Book({
        user: req.user._id,
        title: 'Sample title',
        image: '/images/sample.jpg',
        selfLink: 'Sample self link',
        authors: 'Sample authors',
        category: 'Sample category',
        description: 'Sample description',
        ISBN: '0000000000-0',
        price: 0.0,
        stockQty: 0,
        rating: 0,
        reviewsCount: 0,
        publisher: 'Ssmple Publisher',
        publishedDate: '1800-01-01',
        subject: 'Sample Subject',
        google_id: '',
    }) ;

    const createdBook = await book.save();

    res.status(201).json( createdBook ) ;
});

export { 
    getBooks, 
    getBookById,
    createBook 
};