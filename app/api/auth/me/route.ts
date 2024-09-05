import { connectToDB } from "@/configs/db";
import userMmodel from "@/models/User";
import { verifyToken } from "@/utils/auth";
import { cookies } from "next/headers";

export async function GET(req: any) {
  try {
    connectToDB();
    const token = cookies().get("token");
    let user = null;
    if (!token) {
      return Response.json({ message: "not token" }, { status: 404 });
    }
    const tokenPyload = verifyToken(token.value);
    if (tokenPyload) {
    user = await userMmodel.findOne(
      { email: tokenPyload.email },
      "-password -refreshtoken -__v"
    );
    return Response.json({message:'success',data:user});
    }else{
        return Response.json({message: "not user",data:null},{status:419})
  
    }
  } catch (error) {
    return Response.json({message: error},{status:500})

  }
}
