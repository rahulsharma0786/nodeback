const mongoose=require("mongoose")
const studetails=new mongoose.Schema({
    "name":String,
    "email":String,
    "adddress":String,
    "contact":String
})

module.exports=mongoose.model("sturecord",studetails)


