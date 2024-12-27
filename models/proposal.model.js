const mongoose = require('mongoose');

const proposlSchema = new mongoose.Schema({

    price: Number,
    days: Number,
    cover: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    },
    idService: { type: mongoose.Schema.Types.ObjectId , ref: 'Service' },
    idUser : { type: mongoose.Schema.Types.ObjectId, ref: 'User' } 

})


module.exports = mongoose.model('Proposal' , proposlSchema);