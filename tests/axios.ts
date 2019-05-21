import axios from "axios";

const port = process.env.APP_PORT || 3000;

export default axios.create({
  baseURL: `http://localhost:${port}`
});
