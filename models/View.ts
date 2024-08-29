const mongoose=require('mongoose')
require('./Articel')
const schema= new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    website:{
        type:String,
        default:'www.ggogle.com'
    },
    Articel:{
        type:mongoose.Types.ObjectId,
        required:true
    },

})

const model= mongoose.models.View || mongoose.model('View',schema)

export default model;