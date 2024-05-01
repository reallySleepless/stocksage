// pages/api/watchlist/delete.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to delete a specific watchlist if an id is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "DELETE") {
    const { id } = req.query;

    // check if the watchlist exists
    const watchlistExists = await db
      .collection("watchlists")
      .findOne({ _id: new ObjectId(id) });

    if (!watchlistExists) {
      return res.status(400).json({ error: "Watchlist does not exist" });
    }

    const watchlist = await db
      .collection("watchlists")
      .deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ watchlist });
  }

  return res.status(400).json({ error: "Invalid request" });
}
