var mongoose=require('mongoose');
var Schema=mongoose.Schema;

//var errString = "Path `{PATH}` ({VALUE}) can only be Number,Chinese or English character,length ";

var usernameReg = [/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]{2,16}$/,"Username length: 2-10, can only be Number,Chinese or English character"]
var passwdReg = [/^[a-zA-Z0-9]{6,10}$/,"Password length: 6-10, can only be Number,Chinese or English character"]
var emailReg = [/^(?=\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$).{8,28}$/,"Email length: 8-28, and make sure format is correct"]

var userSchema = new Schema({
	username: {type:String,match:usernameReg,required:true,trim:true,unique:true},
	password: {type:String,match:passwdReg,required:true,trim:true},
    email: {type:String,match:emailReg,required:true,trim:true,unique:true},
	regDate: {type: Date,default: Date.now},
});

module.exports = mongoose.model('User', userSchema);