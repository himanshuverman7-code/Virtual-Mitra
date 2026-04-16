import { RouterProvider } from "react-router"
import routes from "./app/app.routes.jsx"
import useAuth from "./features/auth/hooks/useAuth.js"
import { useEffect } from "react";
import FullPageLoader from "./shared/components/Loader.jsx";

const App = () => {
  const { handleGetMe, booting } = useAuth();
  useEffect(() => {
    handleGetMe();
  }, []);

  if (booting) {
    return <FullPageLoader />;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <RouterProvider router={routes} />
    </main>
  )
}

export default App