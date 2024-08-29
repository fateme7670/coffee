import { Footer, Navbar, Slider } from "@/components/modules";
import { Article, Latest, Promote } from "@/components/templates";
import { connectToDB } from "@/configs/db";
import productmodel from "@/models/Product";
import { authUser } from "@/utils/userhelper";


export default async function Home() {
  connectToDB()
  const user=await authUser()
  const product=await productmodel.find({},"-__v").sort({_id:-1}).limit(8).lean()

  return (
   <>
     <Navbar islogin={user? true: false} />
     <Slider />
     <Latest product={JSON.parse(JSON.stringify(product))}/>
     <Promote />
     <Article />
     <Footer />
   </>
  );
}
