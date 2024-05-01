// pages/api/prediction/create.js
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to create a new prediction if route is /api/mongodb/prediction/create
// POST request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const newprediction = JSON.parse(req.body);

    const prediction = await db
      .collection("predictions")
      .insertOne({ ...newprediction });

    return res.status(200).json({ prediction });
  }

  return res.status(400).json({ error: "Invalid request" });
}
