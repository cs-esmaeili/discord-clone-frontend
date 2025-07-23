import axios from 'axios';
import store from '@/lib/redux/store';
import { setAccessToken } from '@/lib/redux/slices/authSlice';
import { refreshToken } from '@/lib/axios/services/auth';

const baseURL = 'http://localhost:3000/';

const http = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

http.interceptors.request.use(
    (config) => {
        const state = store.getState();
        const accessToken = state.auth.accessToken;
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


http.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const res = await refreshToken();
                const newAccessToken = res.data?.accessToken;

                if (newAccessToken) {
                    store.dispatch(setAccessToken(newAccessToken));

                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return http(originalRequest);
                }
            } catch (refreshErr) {
                store.dispatch(setAccessToken(null));
            }
        }

        return Promise.reject(error);
    }
);

export default http;
