import axios from "axios";

const http = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  Headers: {},
});

try {
  http.interceptors.request.use(
    (config) => {
      let data = JSON.parse(localStorage.getItem("adey"));

      if (data && data.user_status.token) {
        config.headers["Authorization"] = "Bearer" + data.token;
      }
      return config;
    },

    (error) => {
      return Promise.reject(error);
    }
  );
} catch (error) {
  console.log(error);
}

export default http;
