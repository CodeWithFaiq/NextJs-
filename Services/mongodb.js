import mongoose from "mongoose";

if (!process.env.MONGODB_URL) {
    throw new Error("Please define the MONGODB_URL environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: true,
        };

        cached.promise = await mongoose.connect(process.env.MONGODB_URL, opts).then((mongoose) => {
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default dbConnect;