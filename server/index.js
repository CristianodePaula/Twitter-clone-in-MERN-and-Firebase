import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from "dotenv"
import authRoutes from "./src/routes/auth.js"
import postRoutes from "./src/routes/post.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

const connect = () => {
    mongoose.connect(process.env.DATABASE)
        .then(() => {
            console.log("Contacted to DB")
        })
        .catch((err) => {
            throw err
        })
}

app.use("/api/auth", authRoutes)
app.use("/api/post", postRoutes)

app.listen(process.env.PORT, () => {
    connect()
    console.log("Conected to Server")
})