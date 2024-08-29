import { connectToDB } from "@/configs/db";
import userModel from "@/models/User";
import {
  generaterefreshToken,
  generateToken,
  verifyemail,
  verifypasshash,
  verifypassword,
  verifyphone,
  verifyToken,
} from "@/utils/auth";

export async function POST(req: any) {
  try {
    connectToDB();
    const body = await req.json();
    const { email,  password } = body;
    const emailverified = verifyemail(email);
    if (!emailverified) {
      return Response.json({ message: "email not valid" }, { status: 422 });
    }
    const passwordverified = verifypassword(password);
    if (!passwordverified) {
      return Response.json({ message: "password not valid" }, { status: 422 });
    }
    // const phoneerified = verifyphone(phone);
    // if (!phoneerified) {
    //   return Response.json({ message: "phone not valid" }, { status: 422 });
    // }
    const user = await userModel.findOne({ email });
    if (!user) {
      return Response.json({ msg: "user not exist" }, { status: 419 });
    }
    const correctpass = await verifypasshash(password, user.password);
    if (!correctpass) {
      return Response.json({ msg: "pass or email wrong" }, { status: 402 });
    }
    const accessToken = generateToken({ email });
    const refreshToken = generaterefreshToken({ email });
    const headers = new Headers();
    headers.append("set-cookie", `token=${accessToken};path=/;httpOnly=true`);
    headers.append(
      "set-cookie",
      `refresh-token=${refreshToken};path=/;httpOnly=true`
    );
   await userModel.findOneAndUpdate(
      { email },
      {
        $set: {
          refreshToken,
        },
      }
    );
    return Response.json(
      { msg: "user login",data:user },
      {
        status: 200,
        headers,
      }
    );
  } catch (error) {
    return Response.json({ msg: error }, { status: 500 });
  }
}
