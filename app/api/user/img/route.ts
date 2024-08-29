import { connectToDB } from "@/configs/db";
import UserModel from "@/models/User";
import { isValidObjectId } from "mongoose";

export async function PUT(req:any) {
    try {
        connectToDB();
      
      
    const formData = await req.formData();
    const img = formData.get("img");
      // if (!isValidObjectId(userid)) {
      //   return Response.json({ message: 'id is not correct:((' }, { status: 401 })
  
      // }
  
      await UserModel.findOneAndDelete({
          img
      });
    //   await UserModel.findOneAndUpdate({_id:userid},
    //    {
    //     $set:{
    //         img
    //     }
    //    })
      return Response.json({ message: "User removed successfully :))" });
    } catch (err) {
      // console.log('errr',err);
      return Response.json({ message: err }, { status: 500 });
    }
  }