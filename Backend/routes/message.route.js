import express from "express";
import { sendMessage } from "../controller/message.contoller.js";
import { secureRoute } from "../middleware/secureRoute.js";
import { getMessage } from "../controller/message.contoller.js";

const router = express.Router();

router.post("/send/:id", secureRoute, sendMessage);
router.get("/get/:id", secureRoute, getMessage);

export default router;