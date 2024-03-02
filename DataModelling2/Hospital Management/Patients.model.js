import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true
         },
    diagonedWith:{
        type: String,
        required: true
    },
    address: {
        type: String,
          required: true
    },
    age:{
        type: Number,
          required: true
    },
    blood_group :{
        type: String,
          required: true
    },
    gender:{
        type:String,
        enum: ["Male", "Female","Others"],
        require: true 
    },
    admittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }

},{timestamps:true})

export const Patient = mongoose.model("Patient", patientSchema)