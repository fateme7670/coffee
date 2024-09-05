import { connectToDB } from "@/configs/db";
import submodel from "@/models/SubDepartment";

export async function POST(req:any) {
    try {
        connectToDB()
        const reqbody = await req.json()
        const {
            title,
            department
        } = reqbody
        if (!title.trim() || !department.trim()) {
            return Response.json({ message: 'should not empty' }, { status: 402 })
        }
        await submodel.create({
            title,
            department
        })
        return Response.json({ message: 'success' }, { status: 201 })


    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}
