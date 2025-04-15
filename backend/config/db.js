import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Rahul:Rahul@cluster0.ls4ic.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}