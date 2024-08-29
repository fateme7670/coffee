import { connectToDB } from "@/configs/db";
import subdepartment from "@/models/SubDepartment";
import { isValidObjectId } from "mongoose";

export async function GET(req:any, { params }:{params:{id:string}}) {
  try {
    connectToDB()
    const id = params.id
    if (!isValidObjectId(id)) {
        return Response.json({ message: 'should be objectid' }, { status: 404 })
    }
    const subDepartment = await subdepartment.find({ department: id })
    return Response.json(subDepartment, { status: 200 });
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });

  }

}