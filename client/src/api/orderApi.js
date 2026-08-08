import axios from "axios";

const OrderAPI = axios.create({
  baseURL: "http://localhost:5000/api/orders",
});

export default OrderAPI;