import { connectToDB } from "@/configs/db";
import tiketModel from "@/models/Ticket";
import { authUser } from "@/utils/userhelper";

export async function POST(req:any) {
    try {
        connectToDB()
        const reqbody = await req.json()
        const { title, body, department, subDepartment, priority, tiketId } = reqbody
       
        const user = await authUser()
        if (!user) {
            return Response.json({ message: 'user not found' }, { status: 419 })
        }
        await tiketModel.findOneAndUpdate(
            { _id: tiketId },
            {
              $set: {
                hasAnswer: true,
              },
            }
          );
        await tiketModel.create({
            title,
            body,
            department,
            subDepartment,
            priority,
            user: user._id,
            isAnswer: true,
            hasAnswer: false,
            maintiket: tiketId
        })
        return Response.json({ message: 'success' }, { status: 201 })

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}