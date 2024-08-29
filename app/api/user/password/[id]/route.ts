import { connectToDB } from "@/configs/db";
import { isValidObjectId } from "mongoose";
import UserModel from "@/models/User";
import { hashPass, verifypassword } from "@/utils/auth";


export async function POST(req:any,{params}:{params:{id:string}}){
    try {
        connectToDB()
        const userid = params.id;
        if (!isValidObjectId(userid)) {
          return Response.json({ message: 'id is not correct:((' }, { status: 401 })
    
        }
     
        const body = await req.json();
      
        const {password} = body
       
       
        const passwordverified = verifypassword(password);
        if (!passwordverified) {
          return Response.json({ message: 'password not valid' },
          { status: 422 })
        }
       
        const hashpassed=await hashPass(password)
       const users= await UserModel.findOneAndUpdate({ _id: userid },{
            $set:{
             
              password:hashpassed,
            }
          });
          return Response.json({ message: "User removed successfully :))" , data: users});
        
    } catch (error) {
        return Response.json({ message: error }, { status: 500 });
    
    }
    }