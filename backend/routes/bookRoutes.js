import express from 'express';
const router = express.Router();
import { 
    getBooks, 
    getBookById 
} from '../controllers/bookController.js';

import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getBooks);

// router.route('/:id').get(getBookById);
router
    .route('/:id')
    .get(checkObjectId, getBookById);

export default router;