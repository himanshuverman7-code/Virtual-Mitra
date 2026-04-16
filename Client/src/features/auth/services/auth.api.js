import axiosInstance from "@/shared/utils/axios";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};

export const getMe = async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};
