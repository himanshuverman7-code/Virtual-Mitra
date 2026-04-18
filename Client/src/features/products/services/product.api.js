import api from "@/shared/utils/axios";

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};

export const getAllProduct = async () => {
  try {
    const response = await api.get(`/products`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error.message);
  }
};
