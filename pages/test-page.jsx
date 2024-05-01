import {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../util/user";

import {
  createWatchlist,
  getAllWatchlists,
  getWatchlist,
  updateWatchlist,
  deleteWatchlist,
} from "../util/watchlist";

function TestPage() {
  // test data
  const user = {
    name: "John Doe",
    email: "test@test.com",
    password: "password",
  };

  const watchlist = {
    name: "Watchlist 1",
    user_id: "60f2e9a6e6f3e1b3b2c5c9b6",
    stocks: ["AAPL", "TSLA", "AMZN"],
  };

  return (
    <div>
      <button onClick={async () => console.log(await createUser(user))}>
        Create User
      </button>
      <button onClick={async () => console.log(await getAllUsers())}>
        Get All Users
      </button>
      <button
        onClick={async () =>
          console.log(await getUser("66321411bd8a4739a39f0703"))
        }
      >
        Get User
      </button>
      <button
        onClick={async () =>
          console.log(
            await updateUser("66321411bd8a4739a39f0703", { name: "Jane Doe" })
          )
        }
      >
        Update User
      </button>
      <button
        onClick={async () =>
          console.log(await deleteUser("66321411bd8a4739a39f0703"))
        }
      >
        Delete User
      </button>
      <button
        onClick={async () => console.log(await createWatchlist(watchlist))}
      >
        Create Watchlist
      </button>
      <button onClick={async () => console.log(await getAllWatchlists())}>
        Get All Watchlists
      </button>
      <button
        onClick={async () =>
          console.log(await getWatchlist("6632183a76b215b708b7b288"))
        }
      >
        Get Watchlist
      </button>
      <button
        onClick={async () =>
          console.log(
            await updateWatchlist("6632183a76b215b708b7b288", {
              name: "Watchlist 2",
            })
          )
        }
      >
        Update Watchlist
      </button>
      <button
        onClick={async () =>
          console.log(await deleteWatchlist("6632183a76b215b708b7b288"))
        }
      >
        Delete Watchlist
      </button>
    </div>
  );
}

export default TestPage;
