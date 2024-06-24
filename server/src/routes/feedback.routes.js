import express from "express"
import { getFeedback, saveFeedback } from "../controller/feedback.controller.js"
const router = express.Router()

router.get("/", getFeedback)
router.post("/save", saveFeedback)

export default router