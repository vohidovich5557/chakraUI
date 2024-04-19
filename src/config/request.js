import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: "https://server-8t53.onrender.com/",
});

export { request };
