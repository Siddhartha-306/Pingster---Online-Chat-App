import express from "express";
import { allUsers, login, logout, signup } from "../controller/user.controller.js";
const router = express.Router();
import { secureRoute } from "../middleware/secureRoute.js";

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allUsers", secureRoute, allUsers);

export default router;