// pages/api/prediction/update.js
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to update a specific prediction if an id is passed
// put request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "PUT") {
    const { id } = req.query;
    const updatedprediction = JSON.parse(req.body);

    // check if the prediction exists
    const predictionExists = await db
      .collection("predictions")
      .findOne({ _id: new ObjectId(id) });

    if (!predictionExists) {
      return res.status(400).json({ error: "prediction does not exist" });
    }

    const prediction = await db
      .collection("predictions")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...updatedprediction } });

    return res.status(200).json({ prediction });
  }

  return res.status(400).json({ error: "Invalid request" });
}
