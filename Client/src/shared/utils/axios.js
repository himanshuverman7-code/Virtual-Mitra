import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const res = await axios.post(
        "/api/auth/refresh",
        {},
        { withCredentials: true }
      );

      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;