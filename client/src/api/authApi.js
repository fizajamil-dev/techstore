import axios from "axios";

const API = axios.create({
  baseURL: "https://techstore-api-theta.vercel.app/api",
});

export default API;