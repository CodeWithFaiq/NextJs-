import mongoose, { model, models } from 'mongoose';

const userSchema=mongoose.Schema({
    name:String,
    email:{
        type:String,
        lowercase:true
    },
    password:String,
    img:String,
})

const userModel= models.users || mongoose.model('users',userSchema)   ;

export default userModel;