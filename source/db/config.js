import mongoose from 'mongoose'

const createConnection = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGO_URI}`)

        console.log(`MongoDB Connection: ${conn.connection.host}`)
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

export { createConnection }