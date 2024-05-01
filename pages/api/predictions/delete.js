// pages/api/prediction/delete.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to delete a specific prediction if an id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "DELETE") {
    const { id } = req.query;

    // check if the prediction exists
    const predictionExists = await db
      .collection("predictions")
      .findOne({ _id: new ObjectId(id) });

    if (!predictionExists) {
      return res.status(400).json({ error: "prediction does not exist" });
    }

    const prediction = await db
      .collection("predictions")
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ prediction });
  }

  return res.status(400).json({ error: "Invalid request" });
}
