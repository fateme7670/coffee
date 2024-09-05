import { connectToDB } from "@/configs/db";
import articelModel from "@/models/Articel";
import articleModel from "@/models/Articel";
import viewModel from "@/models/View";
import { verifyemail } from "@/utils/auth";
import { writeFile } from "fs/promises";
import { isValidObjectId } from 'mongoose';
import path from "path";
export async function DELETE(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB()
        const id = params.id
        if (!isValidObjectId(id)) {
            return Response.json({ message: 'not valid id' }, { status: 402 })
        }
        await articleModel.findOneAndDelete({ _id: id })
        return Response.json({ message: 'successfully article deleted success' })

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}
export async function POST(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB()
        const id = params.id
        // console.log(id);
        const body = await req.json()
        const {
            content,
            name,
            email,
            website,
        } = body
        const emailverify = verifyemail(email)
        if (!emailverify) {
            return Response.json({ message: 'not valid email' }, { status: 404 })

        }
        if (!isValidObjectId(id)) {
            return Response.json({ message: 'not valid id' }, { status: 402 })
        }
        await viewModel.create({
            content,
            name,
            email,
            website,
            Articel:id
        })
        return Response.json({ message: 'success' },{status:201})

    } catch (error) {
        // console.log('error view',error);
        return Response.json({ message: error }, { status: 500 })

    }
}
export async function PUT(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB()
        const id = params.id
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
        const product = await articelModel.findOneAndUpdate({_id:id},{
            $set:{
                title,
                shortdesc,
                authername,
                longdesc,
                img: `http://localhost:3000/articels/${filename}`
            }
        })
        return Response.json({ message: "success", data: product }, { status: 201 })

    } catch (error) {
        // console.log('error view',error);
        return Response.json({ message: error }, { status: 500 })

    }
}
