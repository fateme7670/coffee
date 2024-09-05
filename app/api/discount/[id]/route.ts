import { connectToDB } from "@/configs/db";
import discountModel from "@/models/Discount";
import { isValidObjectId } from "mongoose";

export async function DELETE(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB();
      const id = params.id;
      if (!isValidObjectId(id)) {
        return Response.json({ message: 'id is not correct:((' }, { status: 401 })
  
      }
  
      await discountModel.findOneAndDelete({ _id: id });
      return Response.json({ message: "success" });
    } catch (err) {
      // console.log('errr',err);
      return Response.json({ message: err }, { status: 500 });
    }
  }