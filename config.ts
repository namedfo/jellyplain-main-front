import axios from "axios";

const $api = axios.create({
  baseURL: "https://jellyplain-back.onrender.com/",
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('jjwt')}`
  return config;
})




export default $api