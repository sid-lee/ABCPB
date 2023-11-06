import express from 'express';
const router = express.Router();
import {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  createBookReview,
  getTopBooks,
} from '../controllers/bookController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getBooks).post(protect, admin, createBook);
router.get('/top', getTopBooks);
router
  .route('/:id')
  .get(checkObjectId, getBookById)
  .put(protect, admin, checkObjectId, updateBook)
  .delete(protect, admin, checkObjectId, deleteBook);
router.route('/:id/reviews').post(protect, checkObjectId, createBookReview);

export default router;