import mongoose from "mongoose";

const orderItemsSchema = new mongoose.schema({
    productId: {
        type: mongoose.schema.types.ObjectId,
        ref: "Category",
    },
    quentity: {
        type: Number,
        required: true
    }
})

const database = new mongoose.schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.schema.types.ObjectId,
        ref: "User"
    },
    orderItems: {
        type: [orderItemsSchema]
    },
    address: {
        type: String,
        required: true
    },

    status:{
        type: String,
        enum: ["PENDING"," COMPLETED", "CANCELLED", "DELIVERED"],
        default: "PENDING"
    }

}, { timestamps: true });

export const SabTodo = mongoose.model('SabTodo', database); 
