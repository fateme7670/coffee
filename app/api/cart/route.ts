import { connectToDB } from "@/configs/db";
import billModel from "@/models/Bill";
import { verifyemail, verifypassword, verifyphone } from "@/utils/auth";
import { authUser } from "@/utils/userhelper";

export async function POST(req:any) {
    try {
        connectToDB()
        const reqbody = await req.json()
        const {
            name,
            family,
            company,
            state,
            city,
            street,
            zipcode,
            phone,
            password,
            body,
            email,
            proId,
            totalPrice

        } = reqbody
        const user=await authUser()
        if (!user) {
            return Response.json({message:'user not found'},{status:419})
        }
            const emailcorrect= verifyemail(email)
            if (!emailcorrect) {
                return Response.json({message:'email not correct format'},{status:404})
            }
            const phonecorrect= verifyphone(phone)
            if (!phonecorrect) {
                return Response.json({message:'phone not correct format'},{status:405})
            }
            // const passcorrect= verifypassword(password)
            // if (!passcorrect) {
            //     return Response.json({message:'password not correct format'},{status:406})
            // }
            await billModel.create({
                name,
                family,
                company,
                state,
                city,
                street,
                zipcode,
                phone,
                password,
                body,
                email,
                proId,
                numberOfBill: Math.floor(Math.random() * 1000000),
                totalPrice,
                user

            })
            return Response.json({message:'success'},{status:201})
    } catch (error) {
        // console.log(error);
        return Response.json({message:error},{status:500})

    }
}