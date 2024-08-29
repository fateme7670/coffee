import { connectToDB } from "@/configs/db";
import discountModel from "@/models/Discount";
import { authUser } from "@/utils/userhelper";



export async function POST(req:any) {
    try {
        connectToDB()
        const body = await req.json()
   
        const {
            product,
            code,
            percent,
            maxUse,
            uses,
        } = body
        if (!code || !percent || !maxUse ) {
            return Response.json({message:'not found'},{status:404})
        }
        const user= await authUser()
        if(!user){
            return Response.json({message:'user not found'},{status:419})

        }
        await discountModel.create({
            product,
            user:user._id,
            code,
            percent,
            maxUse,
            uses,
        })
        return Response.json({message:'dicount added successfully'},{status:201})

    } catch (error) {
        // console.log("error dis=>",error);
        return Response.json({message:error},{status:500})

    }
}