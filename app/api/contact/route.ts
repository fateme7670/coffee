import { connectToDB } from "@/configs/db";
import contactmodel from "@/models/Contact";
import { verifyemail, verifyphone } from "@/utils/auth";

export async function POST(req:any) {
  try {
    connectToDB()
    const body = await req.json()
    const {
      email,
      name,
      company,
      phone,
      message
    } = body
    
    if (!email.trim() || !name.trim() || !company.trim() || !phone.trim() || !message.trim()) {
      return Response.json({ message: "should not empty" },{status:404 });
  
    }
    const correctemail= verifyemail(email)
    if (!correctemail) {
      return Response.json({ message: "email should be like format" },{status:419 });
  
    }
    const correctpphone= verifyphone(phone)
    if (!correctpphone) {
      return Response.json({ message: "phone should be like format" },{status:419 });
  
    }
    await contactmodel.create({
      email,
      name,
      company,
      phone,
      message
    })
    return Response.json({ message: "success" },{status:201 });
  } catch (error) {
    return Response.json({ message: error },{status:500 });

  }
 
}
