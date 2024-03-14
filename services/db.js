//  Connection code of node and mongo db

//1 Import mongoose
const mongoose=require('mongoose')
DATABASE='mongodb://localhost:27017/contact'

//2 Connection string
mongoose.connect(DATABASE)

//3 Model Creation
const contact=mongoose.model('contacts',{
    id:Number,
    name:{firstname:String,lastname:String},
    email:String,
    phone:String,
    address:{city:String,street:String,zipcode:String},
})
module.exports={
    contact
}