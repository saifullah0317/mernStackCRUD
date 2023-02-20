import mongoose from "mongoose";

const Connection=async ()=>{
    const url='mongodb+srv://SaifUllah:tubelight@crud-app.hwyxo6q.mongodb.net/?retryWrites=true&w=majority';
    try{
        mongoose.set('strictQuery',false);
        await mongoose.connect(url);
        console.log("Connected to database successfully...");
    }catch(err){
        console.log("Error while connecting to database: "+err);
    }
}
export default Connection;