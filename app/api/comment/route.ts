import { connectToDB } from "@/configs/db";
import commentModel from "@/models/Comment";
import productModel from "@/models/Product";
import { verifyemail } from "@/utils/auth";
import { authUser } from "@/utils/userhelper";

export async function POST(req: any) {
  try {
    connectToDB();
    const commentbody = await req.json();
    const { username, body, email, score, product } = commentbody;
    const user=await authUser()
    if (!user) {
      return Response.json({msg:'not user login'},{status:405})
    }
    const verifiedemail = verifyemail(email);

    if (!username.trim() || !body.trim() || !verifiedemail) {
      return Response.json({ msg: "data not valid" }, { status: 402 });
    }
    const comment = await commentModel.create({
      username,
      body,
      email,
      score,
      product,
      user:user._id
    });
    await productModel.findOneAndUpdate(
      {
        _id: product,
      },
      {
        $push: { comments: comment._id },
      }
    );
    return Response.json(
      { message: "create success", data: comment },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}

export async function GET(req:any){
    try {
        connectToDB()
        const comment= await commentModel.find({}, "-__v")
        return Response.json({message:'success',data:comment})
    } catch (error) {
        return Response.json({ message: error }, { status: 500 });

    }
}