import express from 'express';
import { resetPassword } from '../controller/forgotpass.controller.js';

const router = express.Router();

// Route to handle password reset
router.post('/forgotpass', resetPassword);

export default router;
