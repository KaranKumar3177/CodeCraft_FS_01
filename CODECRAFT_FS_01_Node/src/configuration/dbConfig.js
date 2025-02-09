const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/FS01_db");

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", () =>{
    console.log(`MongoDB Connection error: ${err}`)
}); 

module.exports = mongoose;