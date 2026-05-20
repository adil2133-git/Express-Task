const mongoose = require("mongoose")

const connectDB = async () => {
    try{
        await mongoose.connect("mongodb+srv://Aadhy:Adil%40123@cluster0.zvtr8is.mongodb.net/")
        console.log("database connected")
    }catch(err){
        console.log("database connection failed", err)
    }
}
