import axios from "axios";

const OrderAPI = axios.create({
  baseURL: "https://techstore-api-theta.vercel.app/api/orders",
});

export default OrderAPI;