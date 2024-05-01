// pages/api/user/create.js
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to create a new user if route is /api/mongodb/user/create
// POST request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const newUser = JSON.parse(req.body);

    // check if the user already exists
    const userExists = await db
      .collection("users")
      .findOne({ user_id: newUser.user_id });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }
    const user = await db.collection("users").insertOne({ ...newUser });

    return res.status(200).json({ user });
  }

  return res.status(400).json({ error: "Invalid request" });
}
