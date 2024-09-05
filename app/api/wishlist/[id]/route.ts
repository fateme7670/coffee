import { connectToDB } from "@/configs/db"
import wishlistmodel from "@/models/Wishlist"
import { authUser } from "@/utils/userhelper"

export async function DELETE(req:any, { params }:{params: {id :string}}) {
    try {
        connectToDB()
        const productID = params.id
        if (!productID) {
            return Response.json({ message: 'user not found' }, { status: 402 })
        }
        const user = await authUser()
        if (!user) {
            return Response.json({ message: 'user not found' }, { status: 402 })
        }
        await wishlistmodel.findOneAndDelete({ 
            user: user.id,
             product: productID
             })
        return Response.json({ message: 'success' }, { status: 200 })
    } catch (error) {
        return Response.json({ message: error }, { status: 500 })

    }

}
export async function GET(req:any,{ params }:{params: {id :string}}) {
    try {
        connectToDB()
        const id = params.id
        if (!id) {
            return Response.json({ message: 'user not found' }, { status: 402 })
        }
        const wish = await wishlistmodel.find({user:id}, "-__v").lean()
        return await Response.json({ message: 'success' ,data:wish})
  
    } catch (error) {
        return Response.json({ message: error }, { status: 500 })
    }
  }