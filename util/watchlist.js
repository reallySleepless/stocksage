// abstraction: watchlist

// Path: util/watchlist.js

// helper functions where we just pass the required data, and they make the calls to the api

// create a new watchlist
export async function createWatchlist(newWatchlist) {
  const res = await fetch("/api/watchlist/create", {
    method: "POST",
    body: JSON.stringify(newWatchlist),
  });
  const data = await res.json();
  return data.watchlist;
}

// get all watchlists
export async function getAllWatchlists() {
  const res = await fetch("/api/watchlist/get");
  const data = await res.json();
  return data.watchlists;
}

// get a specific watchlist
export async function getWatchlist(id) {
  const res = await fetch(`/api/watchlist/get?id=${id}`);
  const data = await res.json();
  return data.watchlist;
}

// get all watchlists for a specific user
export async function getUserWatchlists(user_id) {
  const res = await fetch(`/api/watchlist/get?user_id=${user_id}`);
  const data = await res.json();
  return data.watchlists;
}

// update a specific watchlist
export async function updateWatchlist(id, updatedWatchlist) {
  const res = await fetch(`/api/watchlist/update?id=${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedWatchlist),
  });
  const data = await res.json();
  return data.watchlist;
}

// delete a specific watchlist
export async function deleteWatchlist(id) {
  const res = await fetch(`/api/watchlist/delete?id=${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data.watchlist;
}
