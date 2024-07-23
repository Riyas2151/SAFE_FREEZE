import mongoose from "mongoose";
import app from "./app.js";

( async()=>{
    try {
        
    await mongoose.connect("mongodb://localhost:27017/gitsetup");
    console.log("Radhe Radhe");

    const onListning =()=>{
        console.log("Listning on port no. 5000");
    }
    app.listen(5000, onListning)
    } catch (error) {
        console.error("error: ",error)
        throw error;
        
    }
})()