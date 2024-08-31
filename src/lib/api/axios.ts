import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-wheat-alpha-40.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
