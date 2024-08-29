import { connectToDB } from "@/configs/db";
import UserModel from "@/models/User";
import { hashPass, verifyemail, verifypassword, verifyphone } from "@/utils/auth";
import { writeFile } from "fs/promises";
import { isValidObjectId } from "mongoose";
import path from "path";

export async function DELETE(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB();
      const userid = params.id;
      if (!isValidObjectId(userid)) {
        return Response.json({ message: 'id is not correct:((' }, { status: 401 })
  
      }
  
      await UserModel.findOneAndDelete({ _id: userid });
      return Response.json({ message: "User removed successfully :))" });
    } catch (err) {
      // console.log('errr',err);
      return Response.json({ message: err }, { status: 500 });
    }
  }
export async function POST(req:any,{params}:{params:{id:string}}){
try {
    connectToDB()
    const userid = params.id;
    if (!isValidObjectId(userid)) {
      return Response.json({ message: 'id is not correct:((' }, { status: 401 })

    }
 
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");
   
    const img = formData.get("img");
    const buffer:any = Buffer.from(await img.arrayBuffer());
    const filename = Date.now() + img.name;
    const pathimg = path.join(process.cwd(), "public/users/" + filename);
    await writeFile(
        pathimg,
        buffer
    );
    const passwordverified = verifypassword(password);
    if (!passwordverified) {
      return Response.json({ message: 'password not valid' },
      { status: 422 })
    }
    const correctEmail = verifyemail(email)
    if (!correctEmail) {
        return Response.json({ message: 'email is not correct:((' }, { status: 402 })
    }
    const correctPhone = verifyphone(phone)
    if (!correctPhone) {
        return Response.json({ message: 'phone is not correct:((' }, { status: 404 })
    }
    const hashpassed=await hashPass(password)
   const users= await UserModel.findOneAndUpdate({ _id: userid },{
        $set:{
          email,
          phone,
          name,
          password:hashpassed,
          img:`http://localhost:3000/users/${filename}`
        }
      });
      return Response.json({ message: "User removed successfully :))" , data: users});
    
} catch (error) {
    return Response.json({ message: error }, { status: 500 });

}
}
export async function PUT(req:any) {
  const formData = await req.formData();
  const img = formData.get("img");

  // Validation
  if (!img) {
      return Response.json(
          { message: "Product has not image !!" },
          { status: 400 }
      );
  }

  try {
      const buffer:any = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;

      await writeFile(
          path.join(process.cwd(), "public/uploads/" + filename),
          buffer
      );

      // ✅
      return Response.json(
          { message: "File uploaded successfully :))" },
          { status: 201 }
      );
  } catch (err) {
      console.log(err);
      return Response.json({ message: err }, { status: 500 });
  }
}