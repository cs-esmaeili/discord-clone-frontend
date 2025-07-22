import axios from "axios";

const baseURL = 'http://localhost:3000/';
const http = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

http.interceptors.request.use((config) => {
    // console.log(config);

    return config;
});

export default http;
