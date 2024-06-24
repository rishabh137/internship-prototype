import 'dotenv/config'
import express from 'express'
import cors from "cors"
// import bodyParser from "body-parser"
import feedbackRoutes from "./routes/feedback.routes.js"
import connectDB from './db/conn.js'

connectDB()
const app = express()

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api/feedback", feedbackRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`The application started at port ${PORT}`);
})