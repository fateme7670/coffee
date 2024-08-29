import { connectToDB } from "@/configs/db";
import commentModel from "@/models/Comment";
import { authAdmin } from "@/utils/userhelper";
export async function PUT(req:any){
    try {
        const admin=await authAdmin()
        if(!admin){
            throw new Error('api wa protected')

        }
        connectToDB()
        const body= await req.json()
        const {id}=body
       await commentModel.findOneAndUpdate({_id:id},{
           $set:{
            isAcsept:true
           }
       })
       return Response.json({message:'comment accepted successfully :))'})
    } catch (error) {
        // console.log("error=> ",error);
        return Response.json({message:error},{status:500})

    }
}