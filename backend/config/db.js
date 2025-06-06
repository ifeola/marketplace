import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
	try {
		const comm = await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoBD Connected:", mongoose.connection.host);
	} catch (error) {
		console.log("MongoDB connection failed:", error.messsage);
		process.exit(1);
	}
};
