import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import Button from "@/shared/components/Button";
import HookFormInput from "@/shared/components/HookFormInput";
import useAuth from "@/features/auth/hooks/useAuth";
import GoogleAuth from "@/shared/components/GoogleAuth";

const LoginCard = () => {
  const { loading, handleSendOTP, handleVerifyOTP } = useAuth();
  const [otpSent, setOtpSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: emailErrors },
    watch: watchEmail,
  } = useForm({ mode: "onBlur" });

  const {
    register: registerOTP,
    handleSubmit: handleSubmitOTP,
    formState: { errors: otpErrors },
  } = useForm({ mode: "onBlur" });

  const onEmailSubmit = async (data) => {
    try {
      await handleSendOTP(data.email, setFieldErrors);
      setOtpSent(true);
      setSubmittedEmail(data.email);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const onOTPSubmit = async (data) => {
    try {
      await handleVerifyOTP(submittedEmail, data.otp, setFieldErrors);
      // On successful verification, redirect or update app state
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  const handleBackToEmail = () => {
    setOtpSent(false);
    setSubmittedEmail("");
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

        {/* Form - Email Step */}
        {!otpSent ? (
          <form
            onSubmit={handleSubmitEmail(onEmailSubmit)}
            className='space-y-5'
          >
            {/* Email field */}
            <HookFormInput
              id='email'
              label='Email Address'
              type='email'
              placeholder='Enter your email'
              icon={<FiMail size={18} />}
              error={emailErrors.email?.message || fieldErrors.email}
              registration={{
                ...registerEmail("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                }),
              }}
            />
            <Button loading={loading} type='submit'>
              Send OTP
            </Button>
          </form>
        ) : (
          /* Form - OTP Step */
          <form onSubmit={handleSubmitOTP(onOTPSubmit)} className='space-y-5'>
            {/* OTP Info */}
            <div className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 text-center'>
              <p className='text-sm text-slate-400'>
                OTP sent to{" "}
                <span className='text-violet-400 font-medium'>
                  {submittedEmail}
                </span>
              </p>
            </div>

            {/* OTP field */}
            <HookFormInput
              id='otp'
              label='Enter OTP'
              type='text'
              placeholder='Enter 6-digit OTP'
              icon={<FiShield size={18} />}
              error={otpErrors.otp?.message || fieldErrors.otp}
              registration={{
                ...registerOTP("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^\d{4}$/,
                    message: "OTP must be 4 digits",
                  },
                }),
              }}
            />

            {/* Buttons */}
            <div className='space-y-3'>
              <Button loading={loading} type='submit'>
                Verify OTP
              </Button>
              <button
                type='button'
                onClick={handleBackToEmail}
                disabled={loading}
                className='w-full bg-slate-800/40 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/60 rounded-xl py-2.5 px-4 text-sm font-medium text-slate-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Change Email
              </button>
            </div>
          </form>
        )}

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
        <GoogleAuth/>

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
