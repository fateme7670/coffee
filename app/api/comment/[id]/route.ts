import { connectToDB } from "@/configs/db"
import commentModel from "@/models/Comment"
import { verifyemail } from "@/utils/auth"
import { CommentProps } from "@/utils/types"
import { isValidObjectId } from "mongoose"

export async function DELETE(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB()
        const id = params.id
        if (!isValidObjectId(id)) {
            return Response.json({ message: 'not valid id' }, { status: 402 })
        }
        await commentModel.findOneAndDelete({ _id: id })
        return Response.json({ message: 'successfully article deleted success' })

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}
export async function PUT(req:any, { params }:{params:{id:string}}) {
    try {
        connectToDB()
        const id = params.id
        // console.log(id);
        const commentbody = await req.json()
        const {
            username, body, email
        } = commentbody
        const emailverify = verifyemail(email)
        if (!emailverify) {
            return Response.json({ message: 'not valid email' }, { status: 404 })

        }
        if (!isValidObjectId(id)) {
            return Response.json({ message: 'not valid id' }, { status: 402 })
        }
        await commentModel.findOneAndUpdate({_id:id},{
            username, body, email
        })
        return Response.json({ message: ' article view added success' },{status:200})

    } catch (error) {
        // console.log('error view',error);
        return Response.json({ message: error }, { status: 500 })

    }
}