// pages/api/user/get.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to get all users if nothitng is passed in the route, or get a specific user if an id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    const { id } = req.query;
    console.log(id);
    if (id) {
      const user = await db.collection("users").findOne({
        user_id: id,
      });
      console.log("USER", user);
      return res.status(200).json({ user });
    }
    const users = await db.collection("users").find({}).toArray();
    return res.status(200).json({ users });
  }

  return res.status(400).json({ error: "Invalid request" });
}
