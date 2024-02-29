import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    required : true,
    unique : true,
    lowercase : true
  },
  email:{
    type: String,
    required :true,
    unique : true,
    lowercase: true

  },
  pasword: {
    type : String,
    required : [true,"Password is required"],
  },
 
} ,{timestamps : true}
);

export const User = mongoose.model("User",userSchema);


