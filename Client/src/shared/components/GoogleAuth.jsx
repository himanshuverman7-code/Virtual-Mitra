import { GrGoogle } from "react-icons/gr";

const GoogleAuth = () => {
  const loginWithGoogle = () => {
  window.location.href = "/api/auth/google";
};
  return (
    <div className='flex'>
      <button
        onClick={loginWithGoogle}
        className='w-full cursor-pointer bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-300 transition-all duration-200 flex items-center justify-center gap-2'
      >
        <GrGoogle />
        Google
      </button>
    </div>
  );
};

export default GoogleAuth;
