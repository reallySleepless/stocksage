// create a new user
export async function createUser(newUser) {
  const res = await fetch("/api/user/create", {
    method: "POST",
    body: JSON.stringify(newUser),
  });
  const data = await res.json();
  return data.user;
}

// get all users
export async function getAllUsers() {
  const res = await fetch("/api/user/get");
  const data = await res.json();
  return data.users;
}

// get a specific user
export async function getUser(id) {
  const res = await fetch(`/api/user/get?id=${id}`);
  const data = await res.json();
  return data.user;
}

// update a specific user
export async function updateUser(id, updatedUser) {
  const res = await fetch(`/api/user/update?id=${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
  });
  const data = await res.json();
  return data.user;
}

// delete a specific user
export async function deleteUser(id) {
  const res = await fetch(`/api/user/delete?id=${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data.user;
}
