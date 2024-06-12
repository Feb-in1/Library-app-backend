const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "aut":String,
        "yr":String,
        "pri":String
    }
)
let librarymodel=mongoose.model("librarys",schema);
module.exports={librarymodel}