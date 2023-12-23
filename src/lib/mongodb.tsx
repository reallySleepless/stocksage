import mongoose from "mongoose";

const connectMongoDB = () => {
	try {
		process.env.MONGODB_URI && mongoose.connect(process.env.MONGODB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
	}
};

export default connectMongoDB;

// @lib/mongodb.js

// import mongoose from "mongoose";

// export async function connectMongoDB() {
// 	try {
// 		process.env.MONGODB_URI && mongoose.connect(process.env.MONGODB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.error("Error connecting to MongoDB:", error);
// 	}
// }

// export default mongoose;
