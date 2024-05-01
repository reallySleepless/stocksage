import axios from "axios";

const response = await axios.get(
  "https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=0be29efc-2ba4-41db-b6d0-88fe4d69451f&redirect_uri=https://127.0.0.1:5000/"
);

console.log(response.data);
