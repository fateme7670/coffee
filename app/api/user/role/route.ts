import { connectToDB } from "@/configs/db"
import userModel from "@/models/User"

export async function PUT(req:any){
    try {
        connectToDB()
        const body= await req.json()
        const {id}=body
   const user=   await  userModel.findOne({_id:id}).lean()
   await userModel.findOneAndUpdate({_id:id},
    {$set:{
       role: user.role==='User' ? "Admin" :"User"
    }})
    return Response.json({message:'user role updated successfuly'},{status:200})
    } catch (error) {
        return Response.json({message:error},{status:500})

    }
}