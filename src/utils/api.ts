import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // replace with your backend URL
});

// ----- REQUEST INTERCEPTOR -----


export default axiosInstance;
