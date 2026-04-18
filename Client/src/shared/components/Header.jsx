import { useState } from "react";
import { Link, useNavigate } from "react-router";
// import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "@/features/auth/slice/auth.slice";
import useAuth from "@/features/auth/hooks/useAuth";
import { BiLogOut, BiMenu, BiUser, BiX } from "react-icons/bi";
import MyAccount from "./MyAccount";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // dispatch(setUser(null));
    // localStorage.removeItem('token');
    // navigate('/login');
    // setIsMenuOpen(false);
  };

  const navigationLinks = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className='bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex-shrink-0 flex items-center group'>
            <div className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300'>
              Virtual Mitra
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2'>
            {navigationLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className='text-slate-300 hover:text-white transition-colors duration-200 relative group'
              >
                {link.label}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300'></span>
              </Link>
            ))}
          </nav>

          {/* Right side - Account/Login */}
          <div className='flex items-center space-x-4'>
            {user ? (
                <MyAccount name={user.name} />
            ) : (
              // Non-Authenticated User
              <Link
                to='/login'
                className='hidden md:inline-flex items-center space-x-2 px-6 py-2 bg-violet-500 hover:bg-violet-400 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                <span className='text-sm font-medium'>Login</span>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors duration-200'
            >
              {isMenuOpen ? (
                <BiX className='w-6 h-6' />
              ) : (
                <BiMenu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className='md:hidden pb-4 border-t border-slate-800'>
            <nav className='flex flex-col space-y-2 pt-4'>
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className='px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors duration-200'
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Auth Section */}
              <div className='border-t border-slate-700 pt-4 mt-4'>
                {user ? (
                  <>
                    <div className='px-4 py-2 flex items-center space-x-2 text-slate-300 bg-slate-800 rounded-lg mb-2'>
                      <BiUser className='w-4 h-4 text-blue-400' />
                      <span className='text-sm'>{user.name || user.email}</span>
                    </div>
                    <button
                      onClick={handleLogout}
                      className='w-full flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200'
                    >
                      <BiLogOut className='w-4 h-4' />
                      <span className='text-sm'>Logout</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to='/login'
                    onClick={() => setIsMenuOpen(false)}
                    className='block w-full text-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg transition-all duration-200'
                  >
                    <span className='text-sm font-medium'>Login</span>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
