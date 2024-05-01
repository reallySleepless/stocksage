// pages/api/prediction/get.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to get all predictions if nothitng is passed in the route, or get a specific prediction if an id is passed, or get a specific prediction based on user_id if  user_id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    const { id, user_id } = req.query;
    if (id) {
      const prediction = await db
        .collection("predictions")
        .find({ _id: new ObjectId(id) });
      return res.status(200).json({ prediction });
    }
    if (user_id) {
      // all predictions for a specific user
      const predictions = await db
        .collection("predictions")
        .find({ user_id })
        .toArray();
      return res.status(200).json({ predictions });
    }
    const predictions = await db.collection("predictions").find({}).toArray();
    return res.status(200).json({ predictions });
  }
}
