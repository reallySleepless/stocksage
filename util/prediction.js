// abstraction: prediction

// Path: util/prediction.js

// helper functions where we just pass the required data, and they make the calls to the api

// create a new prediction
export async function createprediction(newprediction) {
  const res = await fetch("/api/prediction/create", {
    method: "POST",
    body: JSON.stringify(newprediction),
  });
  const data = await res.json();
  return data.prediction;
}

// get all predictions
export async function getAllpredictions() {
  const res = await fetch("/api/prediction/get");
  const data = await res.json();
  return data.predictions;
}

// get a specific prediction
export async function getprediction(id) {
  const res = await fetch(`/api/prediction/get?id=${id}`);
  const data = await res.json();
  return data.prediction;
}

// get all predictions for a specific user
export async function getUserpredictions(user_id) {
  const res = await fetch(`/api/prediction/get?user_id=${user_id}`);
  const data = await res.json();
  return data.predictions;
}

// update a specific prediction
export async function updateprediction(id, updatedprediction) {
  const res = await fetch(`/api/prediction/update?id=${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedprediction),
  });
  const data = await res.json();
  return data.prediction;
}

// delete a specific prediction
export async function deleteprediction(id) {
  const res = await fetch(`/api/prediction/delete?id=${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data.prediction;
}
