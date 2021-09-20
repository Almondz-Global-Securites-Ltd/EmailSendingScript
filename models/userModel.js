const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    imei: {
        type: Number,
        required: true,
        trim:true
    },
    mobileNumber: {
        type:String, 
        minlength:[10,"Phone number must be of 10 digit"],
        maxlength:[10,"cannot be more tha 10 digit"],
        required: true,
        trim:true
    },
    email:{
        type: String,
        trim:true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },        
    }
    
},
{
    timestamps:true
});

const signUp = mongoose.model('users', userSchema);
module.exports = signUp;