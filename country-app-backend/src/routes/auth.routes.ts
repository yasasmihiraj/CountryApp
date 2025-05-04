import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller";
import { Request, Response } from "express";

const router = express.Router();  // ✅ Ensure router is correctly defined

router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;