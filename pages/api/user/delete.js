// pages/api/user/delete.js
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to delete a specific user if an id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "DELETE") {
    const { id } = req.query;

    // check if the user exists
    const userExists = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });

    if (!userExists) {
      return res.status(400).json({ error: "User does not exist" });
    }

    const user = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ user });
  }

  return res.status(400).json({ error: "Invalid request" });
}
