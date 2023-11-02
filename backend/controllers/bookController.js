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
        selfLink: 'http://sample.self-link/',
        authors: 'Mark Twain, Sidney Wolf',
        category: 'Horror | Romance',
        description: 'Sample description',
        ISBN: '0000000000-0',
        price: 0.0,
        stockQty: 0,
        rating: 0,
        reviewsCount: 0,
        publisher: 'Random Publisher',
        publishedDate: '2023-11-02',
        subject: 'Computer Programming Language',
        google_id: '',
    }) ;

    const createdBook = await book.save();

    res.status(201).json( createdBook ) ;
});

// @desc    Update a book
// @route   PUT /api/books/:id
// @access  Private/Admin
const updateBook = asyncHandler(async (req, res) => {

    const { 
        title, image, price, selfLink, authors, category, 
        description, ISBN, stockQty, rating, reviewsCount,  
        publisher, publishedDate, subject, google_id } =
      req.body;
  
    const book = await Book.findById(req.params.id);
  
    if (book) {
        book.title = title;
        book.image = image;
        book.price = price;
        book.selfLink = selfLink;
        book.authors = authors;
        book.authors = authors;
        book.category = category;
        book.description = description;
        book.ISBN = ISBN;
        book.stockQty = stockQty;
        book.rating = rating;
        book.reviewsCount = reviewsCount;
        book.publisher = publisher;
        book.publishedDate = publishedDate;
        book.subject = subject;
        book.google_id = google_id;
  
      const updatedProduct = await book.save();
      res.json(updatedProduct);

    } else {
      res.status(404);
      throw new Error('Book not found');
    }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Admin
const deleteBook = asyncHandler(async (req, res) => {
    const book = await Book.findById(req.params.id);
  
    if (book) {
      await Book.deleteOne({ _id: book._id });
      res.json({ message: 'Book removed' });
    } else {
      res.status(404);
      throw new Error('Book not found');
    }
  });

export { 
    getBooks, 
    getBookById,
    createBook,
    updateBook,
    deleteBook
};