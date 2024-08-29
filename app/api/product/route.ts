import { connectToDB } from "@/configs/db";
import productModel from "@/models/Product";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req: any) {
  try {
    connectToDB();
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
 const product=   await productModel.create({
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
    });
    return Response.json(
      { msg: "product added successfully" , data: product},
      { status: 201 }
    );
  } catch (error) {
    console.log("err", error);

    return Response.json({ msg: error }, { status: 500 });
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
export async function GET(req:any) {
    try {
        const product = await productModel.find({}, "-__v").populate("comments")
        return await Response.json(product)

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })
    }
}