import { useDispatch, useSelector } from "react-redux";
import { getMe, register, sendOTP, verifyOTP } from "@/features/auth/services/auth.api";
import { setBooting, setError, setLoading, setUser } from "@/features/auth/slice/auth.slice";
import { hasValidationErrors } from "@/shared/utils/responseHandler";
import { showSuccessToast, showErrorToast } from "@/shared/utils/toast";

const useAuth = () => {
  const { user, loading, error, booting } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSendOTP = async (email, setFieldErrors) => {
    try {
      dispatch(setLoading(true));
      const response = await sendOTP(email);
      dispatch(setError(null));
      showSuccessToast(response?.message || "OTP sent successfully!");
      return response;
    } catch (error) {
      if (hasValidationErrors(error)) {
        if (setFieldErrors) {
          setFieldErrors(error.fieldErrors);
        }
        dispatch(setError(error.message));
        showErrorToast(error.message);
      } else {
        dispatch(setError(error.message || "Failed to send OTP"));
        showErrorToast(error.message || "Failed to send OTP");
      }
      throw error;
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleVerifyOTP = async (email, otp, setFieldErrors) => {
    try {
      dispatch(setLoading(true));
      const response = await verifyOTP(email, otp);
      dispatch(setUser(response.user));
      dispatch(setError(null));
      showSuccessToast(response.message || "Login successful!");
      return response;
    } catch (error) {
      if (hasValidationErrors(error)) {
        if (setFieldErrors) {
          setFieldErrors(error.fieldErrors);
        }
        dispatch(setError(error.message));
        showErrorToast(error.message);
      } else {
        dispatch(setError(error.message || "OTP verification failed"));
        showErrorToast(error.message || "OTP verification failed");
      }
      throw error;
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
    handleRegister,
    handleGetMe,
    handleSendOTP,
    handleVerifyOTP,
    user,
    loading,
    error,
    booting,
  };
};

export default useAuth;
