// pages/api/watchlist/delete.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to delete a specific watchlist if an id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "DELETE") {
    const { id } = req.query;
    const watchlist = await db
      .collection("watchlists")
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ watchlist });
  }

  return res.status(400).json({ error: "Invalid request" });
}
