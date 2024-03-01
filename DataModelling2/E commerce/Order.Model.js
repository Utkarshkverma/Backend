import mongoose from "mongoose"

const orderItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Product"
    },
    quantity: {
        type: Number, 
        required: [true , 'Please provide a valid Quantity']
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice:{
        type: Number,
        required: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    orderItems: {
          type : [orderItemSchema] ,
    },
    address : {
        type : String,
        required : [true,"Please enter your Address"]
    },
    status:{
        type : String,
        enum: ["Pending","Delivered","Cancelled"],
        default: "Pending"
    }

},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)