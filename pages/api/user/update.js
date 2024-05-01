// pages/api/user/update.js
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to update a specific user if an id is passed
// put request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "PUT") {
    const { id } = req.query;
    const updatedUser = JSON.parse(req.body);
    const user = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...updatedUser } });

    return res.status(200).json({ user });
  }

  return res.status(400).json({ error: "Invalid request" });
}
