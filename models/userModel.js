const mongoose = require('mongoose')
const userSchema = mongoose.Schema(
    {
        email :{
            type : String,
            required : [true,'please add email address'],
            unique : [true,'email address is already taken']
        },
        password :{
            type : String,
            required : [true,'please add password'],
        },
        timestamps : true
    }
)

module.exports = mongoose.model('user',userSchema)