import { connectToDB } from "@/configs/db";
import tiketmodel from "@/models/Ticket";
import { authUser } from "@/utils/userhelper";

export async function POST(req:any) {
    try {
        connectToDB()
        const user = await authUser()
        const reqbody = await req.json()
        const {
            title,
            body,
            department,
            subDepartment,
            priority,
        } = reqbody
        if (!title.trim() ||
            !body.trim() ||
            !department.trim() ||
            !subDepartment.trim() ||
            !priority.trim()) {
            return Response.json({ message: 'should not empty' }, { status: 402 })
        }
        await tiketmodel.create({
            title,
            body,
            department,
            subDepartment,
            priority,
            user:user._id
        })
        return Response.json({ message: 'success' }, { status: 201 })


    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}