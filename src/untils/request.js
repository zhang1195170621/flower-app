import axios from "axios";

const service = axios.create({
  baseURL: "https://api.21cake.com/",
  timeout: 5000
});

// service.interceptors.response.use(
//   response => {
//     const res = response.data;
//     return res;
//   },
//   error => {
//     console.log(error);
//   }
// );

export function get(url, params) {
  return service.get(url, { params });
}

export default service;
