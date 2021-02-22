import axios from "axios";

const api = axios.create({
  baseURL: "aquiseraLinkApi",
});

export default api;
