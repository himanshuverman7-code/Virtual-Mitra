import { useDispatch, useSelector } from "react-redux";
import { getMe, login, register } from "../services/auth.api";
import { setBooting, setError, setLoading, setUser } from "../slice/auth.slice";
import { hasValidationErrors } from "@/shared/utils/responseHandler";
import { showSuccessToast, showErrorToast } from "@/shared/utils/toast";

const useAuth = () => {
  const { user, loading, error, booting } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = async (data, setFieldErrors) => {
    try {
      dispatch(setLoading(true));
      const response = await login(data);
      dispatch(setUser(response.user));
      dispatch(setError(null));
      showSuccessToast(response.message || "Login successful!");
    } catch (error) {
      // Handle validation errors
      if (hasValidationErrors(error)) {
        if (setFieldErrors) {
          setFieldErrors(error.fieldErrors);
        }
        dispatch(setError(error.message));
        showErrorToast(error.message);
      } else {
        dispatch(setError(error.message || "Login failed"));
        showErrorToast(error.message || "Login failed");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRegister = async (data, setFieldErrors) => {
    try {
      dispatch(setLoading(true));
      const response = await register(data);
      dispatch(setUser(response.user));
      dispatch(setError(null));
      showSuccessToast(response.message || "Registration successful!");
    } catch (error) {
      // Handle validation errors
      if (hasValidationErrors(error)) {
        if (setFieldErrors) {
          setFieldErrors(error.fieldErrors);
        }
        dispatch(setError(error.message));
        showErrorToast(error.message);
      } else {
        dispatch(setError(error.message || "Registration failed"));
        showErrorToast(error.message || "Registration failed");
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleGetMe = async () => {
    try {
      const response = await getMe();
      dispatch(setUser(response.user));
      dispatch(setError(null));
    } catch (error) {
      dispatch(setError(error.message || "Failed to fetch user"));
    } finally {
      dispatch(setBooting(false));
    }
  };

  return {
    handleLogin,
    handleRegister,
    handleGetMe,
    user,
    loading,
    error,
    booting,
  };
};

export default useAuth;
