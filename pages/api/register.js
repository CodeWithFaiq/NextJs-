import dbConnect from "@/Services/mongodb";
import bcrypt from 'bcryptjs';
import userModel from "@/models/userSchema";
export default async function handler(req,res){

dbConnect();

const {name,email,password}=req.body;

const checkUser=await userModel.findOne({email});
if(checkUser)return res.status(401).send('User is Already Registered');

const hashedPassword=await bcrypt.hash(password,10);

const user=await userModel.create({
name,
email,
password:hashedPassword
})
res.send(user);

}