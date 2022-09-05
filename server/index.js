import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import dotenv from "dotenv"
import authRoutes from "./src/routes/auth.js"

const app = express()
dotenv.config()

const connect = () => {
    mongoose.connect(process.env.DATABASE)
        .then(() => {
            console.log("Contacted to DB")
        })
        .catch((err) => {
            throw err
        })
}

app.use(express.json())
app.use(cors())
app.use("/api/auth", authRoutes)

app.listen(process.env.PORT, () => {
    connect()
    console.log("Conected to Server")
})