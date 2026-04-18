import { useDispatch, useSelector } from "react-redux";
import { getAllProduct, getProduct } from "../services/product.api";
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

  const handleGetProduct = async (id) => {
    try {
      const response = await getProduct(id);
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
    handleGetProduct,
  };
};

export default useProduct;
