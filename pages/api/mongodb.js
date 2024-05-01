// pages/api/mongodb.js
import { connectToDatabase } from "../../lib/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  // Perform database operations here, e.g.:
  // const data = await db.collection('your-collection').find().toArray();

  res.status(200).json({ message: "Connected to MongoDB" });
}
