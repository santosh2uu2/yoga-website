// backend/routes/enrollment.route.js
import express from 'express';
import { getEnrollments, getEnrollmentById, deleteEnrollment } from '../controller/enrollment.controller.js';

const router = express.Router();

router.get('/', getEnrollments);
router.get('/:id', getEnrollmentById);
router.delete('/:id', deleteEnrollment);

export default router;
