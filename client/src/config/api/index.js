import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
});

Api.interceptors.request.use((req) => {
  const token = localStorage.getItem("MERN_TodoApp_Token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default Api;
