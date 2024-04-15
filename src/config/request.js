import axios from "axios";
import Cookies from "js-cookie";

const request = axios.create({
  baseURL: "https://chakra-server-gamma.vercel.app/",
});

export { request };
