import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/shared/components/Button";
import InputField from "@/shared/components/InputField";
import { FiMail } from "react-icons/fi";
import useAuth from "../hooks/useAuth";
import { GrGoogle } from "react-icons/gr";

const LoginCard = () => {
  const { loading } = useAuth();
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  const onSubmit = async (data) => {
    console.log("Login attempt:", data);
    setIsSubmitted(true);
  };
  return (
    <div className='relative w-full max-w-md'>
      <div className='bg-slate-900/80 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 shadow-2xl shadow-black/50'>
        {/* Header */}
        <div className='text-center mb-8'>
          <div className='w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-900/40'>
            <span className='text-2xl font-bold text-white'>V</span>
          </div>
          <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
          <p className='text-slate-400 text-sm'>
            Sign in to your Virtual Mitra account
          </p>
        </div>

        {/* Form */}
        <form className='space-y-5'>
          {/* Email field */}
          <InputField
            id='email'
            label='Email Address'
            type='email'
            placeholder='Enter your email'
            icon={<FiMail size={18} />}
          />
          <Button loading={loading} type='submit'>
            Verify
          </Button>
        </form>

        {/* Divider */}
        <div className='relative my-6'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-slate-700/50'></div>
          </div>
          <div className='relative flex justify-center text-sm'>
            <span className='px-2 bg-slate-900/80 text-slate-500'>
              Or continue with
            </span>
          </div>
        </div>

        {/* Social login buttons */}
        <div className='flex'>
          <button className='w-full cursor-pointer bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-300 transition-all duration-200 flex items-center justify-center gap-2'>
            <GrGoogle />
            Google
          </button>
        </div>

        {/* Sign up link */}
        <p className='text-center text-sm text-slate-400 mt-6'>
          Don't have an account?{" "}
          <a
            href='#'
            className='text-violet-400 hover:text-violet-300 transition-colors font-medium'
          >
            Sign up
          </a>
        </p>
      </div>

      {/* Bottom accent */}
      <div className='h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 rounded-full mt-6 opacity-50'></div>
    </div>
  );
};

export default LoginCard;
