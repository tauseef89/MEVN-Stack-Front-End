import axios from "axios";

export const HTTP = axios.create({
  baseURL: `http://localhost:2000/api/`,
  headers: {
    "Content-Type": "application/json",
    "auth-token": localStorage.getItem("token")
  }
});
