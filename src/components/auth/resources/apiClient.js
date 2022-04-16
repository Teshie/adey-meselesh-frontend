import http from "./http";
import urls from "./urls";

const apiClient = {
  auth: {
    signup(payload) {
      return http.post(urls.signup, payload);
    },
    login(payload) {
      return http.post(urls.login, payload);
    },
    projects(payload) {
      return http.post(urls.projects, payload);
    },
  },
};

export default apiClient;
