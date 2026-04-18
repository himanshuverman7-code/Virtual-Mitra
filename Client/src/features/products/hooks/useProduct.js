import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProductById } from "@/features/products/services/product.api";
import {
  setError,
  setLoading,
  setProduct,
  setProducts,
} from "../slice/product.slice";

const useProduct = () => {
  const dispatch = useDispatch();
  const { loading, error, hashFetched, products, product } = useSelector(
    (state) => state.products,
  );

  const handleGetAllProducts = async () => {
    try {
      const response = await getAllProduct();      
      dispatch(setProducts(response.products));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  const handleGetProductById = async (id) => {
    try {
      const response = await getProductById(id);
      dispatch(setProduct(response.product));
    } catch (error) {
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    products,
    product,
    loading,
    error,
    handleGetAllProducts,
    handleGetProductById,
  };
};

export default useProduct;
