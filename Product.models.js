import mongoose from "mongoose";
import { Category } from "./Category.models";
// import user from "./User.models"

const productSchema =  new  mongoose.schema({
    description: {
        type: String,
        required: true
    },
    name: {
        type: String,
        require: true,
    },
    productImage:{
        type: String,
    },
    price:{
        type: Number,
        default: 0,
    },
    stock:{
        type: Number,
        default: 0,
    },
    Category:{
          type: mongoose.schema.types.ObjectId,
          ref: "Category",
          required: true,
    },
    owner :{
          type: mongoose.schema.types.ObjectId,
          ref: "User",
    },
}, {timestamps: true});

export const Product = mongoose.model('Product', productSchema); 
