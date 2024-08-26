import mongoose from 'mongoose';

let isConnected = false; //variable to check the connection state

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log("MONGODB_URL NOT FOUND");
    if(isConnected) return console.log("Connected to MongoDB");
    
    try {
        await mongoose.connect(process.env.MONGODB_URL ?? '')

        isConnected = true;
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log("Couldn't connect to MongoDb", error);
    }
}
