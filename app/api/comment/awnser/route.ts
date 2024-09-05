import { connectToDB } from "@/configs/db";
import commentmodel from "@/models/Comment";
import { authUser } from "@/utils/userhelper";
import productModel from "@/models/Product";

export async function POST(req: any) {
  try {
    connectToDB();

    const commentbody = await req.json();
    const { username, body, email, score, product, commentId } = commentbody;
    const user = await authUser();
    if (!user) {
      return Response.json({ message: "user not found" }, { status: 419 });
    }
    await commentmodel.findOneAndUpdate(
      { _id: commentId },
      {
        $set: {
          hasAnswer: true,
        },
      }
    );
    const comment = await commentmodel.create({
      username,
      body,
      email,
      score,
      product,
      user: user._id,
      isAnswer: true,
      hasAnswer: false,
      mainComment: commentId,
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
      { message: "success" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
