
import userModel from "@/models/userSchema";
import dbConnect from "@/Services/mongodb";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcryptjs'
export default NextAuth({

    session:{
        strategy:'jwt',
    },

   providers:[
     CredentialsProvider({
        credentials:{
            email:{
                label:'Email',
                type:'email'
            },
            password:{
                label:'Password',
                type:'password'
            }
        },
       async authorize(credentials){
         dbConnect();
         const {email,password}=credentials;
         const user=await userModel.findOne({email})
        if(!user)return res.status(403).send('Invalid Email or Password');
        const checkPassword=await bcrypt.compare(password,user.password);
        if(!checkPassword)return res.status(403).send('Invalid Email or Password');
        return user;
        }
     }),
   
     GoogleProvider({
clientId:process.env.clientId,
clientSecret:process.env.clientSecret
     })
     

        
   ],


    secret:process.env.NEXTAUTH_SECRET,


})