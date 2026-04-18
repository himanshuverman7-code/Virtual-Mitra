import axiosInstance from "@/shared/utils/axios";

export const getProduct = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};

export const getAllProduct = async () => {
  try {
    const response = await axiosInstance.get(`/products`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};
