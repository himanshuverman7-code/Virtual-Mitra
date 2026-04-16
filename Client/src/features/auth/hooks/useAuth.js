import { useDispatch, useSelector } from "react-redux";
import { getMe, login, register } from "../services/auth.api";
import { setBooting, setError, setLoading, setUser } from "../slice/auth.slice";

const useAuth = () => {
    const { user, loading, error, booting } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogin = async (data) => {
        try {
            const response = await login(data);
            dispatch(setUser(response.user));
        } catch (error) {
            dispatch(setError(error.message));

        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleRegister = async (data) => {
        try {
            const response = await register(data);
            dispatch(setUser(response.user));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setLoading(false));
        }
    };

    const handleGetMe = async () => {
        try {
            const response = await getMe();
            dispatch(setUser(response.user));
        } catch (error) {
            dispatch(setError(error.message));
        } finally {
            dispatch(setBooting(false));
        }
    };

    return { handleLogin, handleRegister, handleGetMe, user, loading, error, booting };
};

export default useAuth;
