import { cookies } from "next/headers";

export async function POST(){
    cookies().delete('token')
    return Response.json({message:'signout success'},{status:200})
}