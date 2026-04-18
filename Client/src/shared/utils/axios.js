import axios from "axios";
import { handleApiResponse } from "./responseHandler";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => {
    // Handle successful responses with the standard format
    try {
      return handleApiResponse(res.data);
    } catch (error) {
      // If it's not our standard format, return data as is
      return res.data;
    }
  },
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 errors with token refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true },
        );

        return api(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    // Handle API errors with standard format
    if (error.response?.data) {
      try {
        // Try to parse standard error format
        const errorData = error.response.data;
        if (errorData.success === false) {
          const err = new Error(errorData.message || "An error occurred");
          if (errorData.errors) {
            err.validationErrors = errorData.errors;
            err.fieldErrors = errorData.errors.reduce((acc, e) => {
              acc[e.field] = e.message;
              return acc;
            }, {});
          }
          return Promise.reject(err);
        }
      } catch (parseError) {
        // Fall through to default error handling
      }
    }

    return Promise.reject(error);
  },
);

export default api;
