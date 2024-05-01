// pages/api/watchlist/update.js
import { ObjectId } from "mongodb";
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to update a specific watchlist if an id is passed
// put request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "PUT") {
    const { id } = req.query;
    const updatedwatchlist = JSON.parse(req.body);

    // check if the watchlist exists
    const watchlistExists = await db
      .collection("watchlists")
      .findOne({ _id: new ObjectId(id) });

    if (!watchlistExists) {
      return res.status(400).json({ error: "Watchlist does not exist" });
    }

    const watchlist = await db
      .collection("watchlists")
      .updateOne({ _id: new ObjectId(id) }, { $set: { ...updatedwatchlist } });

    return res.status(200).json({ watchlist });
  }

  return res.status(400).json({ error: "Invalid request" });
}
