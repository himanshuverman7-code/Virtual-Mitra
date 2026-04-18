import api from "@/shared/utils/axios";

export const sendOTP = async (email) => {
  try {
    const response = await api.post("/auth/login", { email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOTP = async (email, otp) => {
  try {
    const response = await api.post("/auth/verify-login", {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await api.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMe = async () => {
  try {
    const response = await api.get("/auth/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
