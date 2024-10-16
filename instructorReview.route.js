import express from 'express';
import { createInstructorReview, getInstructorReviews } from '../controller/instructorReview.controller.js';

const router = express.Router();

router.post('/', createInstructorReview);
router.get('/:instructorId', getInstructorReviews);

export default router;
