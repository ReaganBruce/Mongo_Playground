import * as dotenv from 'dotenv'
dotenv.config()
import express, { urlencoded } from 'express'
import mongoose from 'mongoose'
import routes from './routes/index.js'
import { createConnection } from './db/config.js'

const app = express()

createConnection() //db context

app.use(express.json())
app.use(urlencoded({ extended: false }))

app.use(routes)


mongoose.set('strictQuery', false)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})
    