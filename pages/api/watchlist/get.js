// pages/api/watchlist/get.js
import { connectToDatabase } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";

// endpoint to get all watchlists if nothitng is passed in the route, or get a specific watchlist if an id is passed, or get a specific watchlist based on userId if  userId is passed
// get request

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  if (req.method === "GET") {
    const { id, user_id } = req.query;
    if (id) {
      const watchlist = await db
        .collection("watchlists")
        .findOne({ _id: new ObjectId(id) });
      return res.status(200).json({ watchlist });
    }
    if (user_id) {
      // all watchlists for a specific user
      const watchlists = await db
        .collection("watchlists")
        .find({ user_id })
        .toArray();
      return res.status(200).json({ watchlists });
    }
    const watchlists = await db.collection("watchlists").find({}).toArray();
    return res.status(200).json({ watchlists });
  }
}
