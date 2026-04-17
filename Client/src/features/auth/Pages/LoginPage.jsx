import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router";
import LoginCard from "../components/LoginCard";

const LoginPage = () => {
  const { loading, user } = useAuth();
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4'>
      {/* Background gradient blur effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl'></div>
      </div>

      {/* Login card */}
      <LoginCard />
    </div>
  );
};

export default LoginPage;
