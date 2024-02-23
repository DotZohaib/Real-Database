import mongoose from "mongoose"

const database = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: [true, 'Password already taken '],
        unique: true,

    }
}, {
    timestamps: true,
})
export const User = mongoose.model('User', database)




