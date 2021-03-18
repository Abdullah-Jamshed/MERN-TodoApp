import axios from "axios";

const auth = axios.create({
  baseURL: "http://localhost:5000",
});

auth.interceptors.request.use((req) => {
  const token = localStorage.getItem("MERN_TodoApp_Token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default auth;
