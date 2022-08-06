const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Student',StudentSchema);