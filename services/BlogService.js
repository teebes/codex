import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.writtenrealms.com/api/v1/blog`,
  // baseURL: `http://localhost:8000/api/v1/blog`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async getPostByPath(path) {
    const resp = await apiClient.get(`/paths/${path}/`);
    return resp.data;
  },
  async getRoutes() {
    const resp = await apiClient.get(`/routes/`);
    return resp.data;
  },
  async getRecent() {
    const resp = await apiClient.get(`/posts/all/`);
    return resp.data;
  }
};
