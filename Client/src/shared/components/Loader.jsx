const FullPageLoader = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-950 text-slate-100">
      <div
        className="border-4 border-gray-300 border-t-violet-500 rounded-full animate-spin"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
}

export const Loader = ({ size = 40 }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div
        className="border-4 border-gray-300 border-t-violet-500 rounded-full animate-spin"
        style={{ width: size, height: size }}
      ></div>
    </div>
  );
}

export default FullPageLoader