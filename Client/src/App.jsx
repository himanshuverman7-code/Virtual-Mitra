import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import routes from "@/app/app.routes.jsx";
import useAuth from "@/features/auth/hooks/useAuth.js";
import { useEffect } from "react";
import FullPageLoader from "@/shared/components/Loader.jsx";
import useProduct from "@/features/products/hooks/useProduct.js";

const App = () => {
  const { handleGetMe, booting } = useAuth();
  const {handleGetAllProducts} = useProduct()
  useEffect(() => {
    Promise.all([
      handleGetMe(),
      handleGetAllProducts()
    ])
  }, []);

  if (booting) {
    return <FullPageLoader />;
  }

  return (
    <main className='min-h-screen bg-slate-950 text-slate-100 font-sans'>
      <Toaster
        position='top-right'
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
          success: {
            duration: 4000,
          },
          error: {
            duration: 5000,
          },
          loading: {
            duration: Infinity,
          },
        }}
      />
      <RouterProvider router={routes} />
    </main>
  );
};

export default App;
