import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    

    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },

    genderPreference:{
        type:String,
        required:true,
        enum:['male','female','both']
    },
    bio:{type:String, default: ""},
        image:{type:String, default: ""},
        likes:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        dislikes:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        matches:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    {timestamps: true}

);

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password,10);
    console.log(this.password);
    next();
})

// userSchema.methods.matchPassword = async function(enteredPassword){
//     console.log(enteredPassword);
//     const pp = await bcrypt.hash(enteredPassword,10);
//     console.log(pp);
//     const check =  await bcrypt.compare(enteredPassword, this.password);
//     console.log(check);
//     return check;
// }


const User = mongoose.model("User", userSchema);

export default User;
