const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortdesc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    authername: {
        type: String,
        required: true
    },
    longdesc: {
        type: String,
        required: true
    },

},
{timestamps:true}
)

const model = mongoose.models.Articel || mongoose.model('Articel', schema)

export default model;