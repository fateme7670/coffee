const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:false
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:'User'
    },
    img:{
        type:String,
        required:false
    },
    refreshToken:String

})
const model=mongoose.models?.User || mongoose.model("User",schema)

export default model