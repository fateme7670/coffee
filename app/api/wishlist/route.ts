import { connectToDB } from "@/configs/db";
import wishlistmodel from "@/models/Wishlist";

export async function POST(req: any) {
  try {
    connectToDB();
    const body = await req.json();
    const { user, product } = body;
    const wish= await wishlistmodel.findOne({user,product})
    if (!wish) {
        await wishlistmodel.create({user,product})
        return Response.json({message:"wishlist create successsfuly"},{status:201})


    }else{
        return Response.json({message:"wishlist exist already"},{status:422})

    }
  } catch (error) {
    return Response.json({message:error},{status:500})

  }
}

