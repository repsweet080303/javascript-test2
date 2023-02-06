import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'https://json-server-kappa-nine.vercel.app/',
});

export default axiosConfig;
