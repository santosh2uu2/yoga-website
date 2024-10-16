import express from "express";
import { createBuy } from "../controller/buy.controller.js";

const router = express.Router();

router.post("/", createBuy);

export default router;
