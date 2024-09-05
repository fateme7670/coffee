import { connectToDB } from "@/configs/db";
import discountModel from "@/models/Discount";

export async function PUT(req:any) {
    try {
        connectToDB()
        const body = await req.json()
        const { code } = body
        // console.log(code);
        const discount = await discountModel.findOne({ code })
        
        if (!discount) {
            return Response.json({message:'code not found'},{status:404})

        }else if(discount.uses=== discount.maxUse){
            return Response.json({message:'code limited'},{status:422})

        }else{
            await discountModel.findOneAndUpdate({code},{
                $inc:{
                    uses:1
                }
            })
            return Response.json({message:'success',data:discount})
           
        }
     

    } catch (error) {
        return Response.json({message:error},{status:500})

    }
}