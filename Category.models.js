import mongoose from 'mongoose';
const categorySchema = new mongoose.schema({
    name: {
        type: String,
        require: true,
    },
}, {
    timestamps: true
})

export const Category = mongoose.model('Category', categorySchema)