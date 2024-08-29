
import {hash,compare} from 'bcryptjs'
import {sign,verify} from 'jsonwebtoken'
import { Object } from './types'




export const hashPass=async(password:string)=>{
const hashed=await hash(password,12)
return hashed
}
export const verifypasshash=async(password:string,hashpassword:string)=>{
const verifyhashed=await compare(password,hashpassword)
return verifyhashed
}
export const generateToken=(data:Object)=>{
    if (!process.env.AccessTokenPrivateKey) return console.log("Missing process.env.AccessTokenPrivateKey");

const generatetoken= sign({...data},process.env.AccessTokenPrivateKey,{
    expiresIn:"60d",
})
return generatetoken
}
export const verifyToken=(token:string)=>{
try {
    if (!process.env.AccessTokenPrivateKey) return console.log("Missing process.env.AccessTokenPrivateKey");

    const verifytoken= verify(token,process.env.AccessTokenPrivateKey)
    return verifytoken 
} catch (error) {
    // console.log('verify error');
    return false
}
}
export const generaterefreshToken=(data:Object)=>{
        if (!process.env.RefreshTokenPrivateKey) return console.log("Missing process.env.RefreshTokenPrivateKey");

    const refreshtoken= sign({...data},process.env.RefreshTokenPrivateKey,{
        expiresIn:"15d",
    })
    return refreshtoken
    }

    export const verifypassword=(password:string)=>{
        const pattern= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g
        return pattern.test(password)
        }
    export const verifyemail=(email:string)=>{
        const pattern= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return pattern.test(email)
        }
    export const verifyphone=(phone:string)=>{
        const pattern= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
        return pattern.test(phone)
        }
  