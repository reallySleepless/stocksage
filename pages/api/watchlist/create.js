// pages/api/watchlist/create.js
import { connectToDatabase } from "../../../lib/mongodb";

// endpoint to create a new watchlist if route is /api/mongodb/watchlist/create
// POST request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "POST") {
    const newwatchlist = JSON.parse(req.body);

    // check if the watchlist already exists
    const watchlistExists = await db
      .collection("watchlists")
      .findOne({ user_id: newwatchlist.user_id });

    if (watchlistExists) {
      return res.status(400).json({ error: "Watchlist already exists" });
    }

    const watchlist = await db
      .collection("watchlists")
      .insertOne({ ...newwatchlist });

    return res.status(200).json({ watchlist });
  }

  return res.status(400).json({ error: "Invalid request" });
}
