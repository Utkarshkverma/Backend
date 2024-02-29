import mongoose from "mongoose"

const subTodo = new mongoose.Schema({
  content : {
    type : String,
    required:true
  },
  complete: {
    type:boolean,
    default : false
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  }
},{timestamps:true})

export const subTodo = mongoose.model("subTodo", subTodo)