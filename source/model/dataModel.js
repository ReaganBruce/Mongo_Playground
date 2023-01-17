import mongoose from "mongoose"

const DataSchema = new mongoose.Schema({
    username: {
        firstName: String,
        lastName: String
    },
    location: {
        city: String,
        state: String,
        zip: {
            type: Number,
            length: 5
        }
    },
    interests: [String, String, String],
},
{
    timestamps: true,
})

const Data = mongoose.model("Data", DataSchema)

export default Data