import { connectToDB } from "@/configs/db"
import banModel from "@/models/Ban"
import { verifyemail, verifyphone } from "@/utils/auth"

export async function POST(req:any) {
    try {
        connectToDB()
        const body = await req.json()
        const { email, phone } = body
        const correctEmail = verifyemail(email)
        if (!correctEmail) {
            return Response.json({ message: 'email is not correct:((' }, { status: 402 })
        }
        const correctPhone = verifyphone(phone)
        if (!correctPhone) {
            return Response.json({ message: 'phone is not correct:((' }, { status: 404 })
        }
        await banModel.create({ email, phone })
        return Response.json({ message: 'ban created successfully' })

    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }
}