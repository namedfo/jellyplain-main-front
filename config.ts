import axios from "axios";

const $api = axios.create({
  baseURL: "http://localhost:3333/",
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('jjwt')}`
  return config;
})




export default $api