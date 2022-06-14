import axios from "axios";

const instance = axios.create({
  // url for server
  baseURL: "http://localhost:3002/",
});

export default instance;
