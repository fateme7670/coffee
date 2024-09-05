import { connectToDB } from "@/configs/db";
import articelModel from "@/models/Articel";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req:any) {
    try {
        connectToDB()
        const formData = await req.formData();

        const title = formData.get("title");
 
        const shortdesc = formData.get("shortdesc");

        const img = formData.get("img");

        const authername = formData.get("authername");

        const longdesc = formData.get("longdesc");



        const buffer = Buffer.from(await img.arrayBuffer());
        const filename = Date.now() + img.name;
        const pathimg = path.join(process.cwd(), "public/articels/" + filename)
        await writeFile(
            pathimg,
            buffer
        );
        const product = await articelModel.create({
            title,
            shortdesc,
            authername,
            longdesc,
            img: `http://localhost:3000/articels/${filename}`
        })
        return Response.json({ message: "success", data: product }, { status: 201 })

    } catch (error) {
        // console.log(error);
        return Response.json({ message: error }, { status: 500 })
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
        const buffer = Buffer.from(await img.arrayBuffer());
        const filename = Date.now() + img.name;

        await writeFile(
            path.join(process.cwd(), "public/articels/" + filename),
            buffer
        );

        // ✅
        return Response.json(
            { message: "File uploaded successfully :))" },
            { status: 201 }
        );
    } catch (err) {
        // console.log(err);
        return Response.json({ message: err }, { status: 500 });
    }
}

export async function GET(req:any) {
    try {
        const article = await articelModel.find({}, "-__v")
        return await Response.json({message:'success',data:article})

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })
    }
}