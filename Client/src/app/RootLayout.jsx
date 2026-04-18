import { Outlet } from "react-router";
import Header from "@/shared/components/Header";

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-slate-950 text-slate-100 font-sans'>
      <Header />
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
