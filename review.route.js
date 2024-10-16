// routes/review.route.js
import express from 'express';
import { submitRating } from '../controller/review.controller.js';

const router = express.Router();

// POST request to submit rating
router.post('/:courseId', submitRating);

export default router;
