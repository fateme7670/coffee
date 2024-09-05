import { connectToDB } from "@/configs/db";
import departmentmodel from "@/models/Department";

export async function POST(req: any) {
  try {
    connectToDB();
    const reqbody = await req.json();
    const { title } = reqbody;
    if (!title.trim()) {
      return Response.json({ message: "should not empty" }, { status: 402 });
    }
    await departmentmodel.create({
      title,
    });
    return Response.json(
      { message: "success" },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
export async function GET() {
  connectToDB();
  const department = await departmentmodel.find({});
  return Response.json( { message: "success" ,data:department});
}
