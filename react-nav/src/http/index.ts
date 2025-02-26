import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const $axios = axios.create({   
    withCredentials: true,
    baseURL: API_URL,
});

export default $axios