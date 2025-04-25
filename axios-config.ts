import axios from "axios";

const instance = axios.create({
  baseURL: "http://5.129.197.148:8000",
});

export default instance;
