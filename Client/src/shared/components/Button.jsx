import { Loader } from "./Loader"

const Button = ({ children, type = "button", className = "", loading = false }) => {
    return (
        < button
            id='complete-purchase-btn'
            type={type}
            className={`cursor-pointer w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-violet-900/40 flex items-center justify-center gap-2 ${className}`}
            disabled={loading}
        >
            {loading ? <Loader /> : children}
        </button >
    )
}   

export default Button