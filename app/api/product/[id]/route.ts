import { connectToDB } from "@/configs/db";
import productModel from "@/models/Product";
import { writeFile } from "fs/promises";
import { isValidObjectId } from 'mongoose';
import path from "path";
export async function DELETE(req:any,{params}:{params:{id:string}}){
try {
    connectToDB()
    const id=params.id
    if (!isValidObjectId(id)) {
        return Response.json({ message: 'not valid id' }, { status: 402 })
    }
await productModel.findOneAndDelete({_id:id})
return Response.json({message:'success'},{status:200})
} catch (error) {
    console.log('delete',error);
    
    return Response.json({ message: error}, { status: 500 })

}
}
export async function PUT(req: any,{params}:{params:{id:string}}) {
    try {
      connectToDB();
      const id=params.id
      if (!isValidObjectId(id)) {
          return Response.json({ message: 'not valid id' }, { status: 402 })
      }
      const formData = await req.formData();
      const name = formData.get("name");
      const price = formData.get("price");
      const shortDescription = formData.get("shortDescription");
      const longDescription = formData.get("longDescription");
      const weight = formData.get("weight");
      const suitableFor = formData.get("suitableFor");
      const smell = formData.get("smell");
      const Asyab = formData.get("Asyab");
      const tags = formData.get("tags");
      const category = formData.get("category");
      const img = formData.get("img");
      const buffer:any = Buffer.from(await img.arrayBuffer());
      const filename = Date.now() + img.name;
      const pathimg = path.join(process.cwd(), "public/uploads/" + filename);
      await writeFile(
          pathimg,
          buffer
      );
   const product=   await productModel.findOneAndUpdate({_id:id},{
       $set:{
        name,
        price,
        shortDescription,
        longDescription,
        weight,
        suitableFor,
        smell,
        tags,
        category,
        Asyab,
        img:`http://localhost:3000/uploads/${filename}`
      }
   });
      return Response.json(
        { message: "success" , data: product},
        { status: 200 }
      );
    } catch (error) {
      console.log("err", error);
  
      return Response.json({ msg: error }, { status: 500 });
    }
  }