import { connectToDB } from "@/configs/db";
import userModel from "@/models/User";
import { generateToken, hashPass, verifyemail, verifypassword, verifyphone } from "@/utils/auth";
import { role } from "@/utils/constant";

export  async function POST(req:any) {
  try {
    connectToDB();
    const body = await req.json();
    const { name, email, phone, password } = body;
    const emailverified = verifyemail(email);
    if (!emailverified) {
      return Response.json({ message: 'email not valid' },
                { status: 422 })
    }
    const passwordverified = verifypassword(password);
    if (!passwordverified) {
      return Response.json({ message: 'password not valid' },
      { status: 422 })
    }
    const phoneerified = verifyphone(phone);
    if (!phoneerified) {
      return Response.json({ message: 'phone not valid' },
      { status: 422 })
    }
    if(!name.trim()){
      return Response.json({ message: 'name not valid' },
      { status: 422 })
    }
    const hashpassed=await hashPass(password)
    const isuser=await userModel.findOne({
      $or:[{email},{name},{phone}]
    })
    if (isuser) {
      return Response.json({ message: 'user exist already' },
      { status: 404 })
      
    }
    const user=await userModel.find({})
    const token=generateToken({name})

    await userModel.create({
      name,
      email,
      phone,
      password:hashpassed,
      role:user.length>0 ? role.USER:role.ADMIN
    });
    return Response.json({ message: 'registrer successfuly' }, {
      status: 201,
      headers:{'set-Cookie':`token=${token};path=/;httpOnly=true`}
    })
  } catch (error) {
    console.log(error);
    
    return Response.json({ message: error }, { status: 500 })


  }
}
