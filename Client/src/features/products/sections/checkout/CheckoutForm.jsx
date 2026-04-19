import { useForm } from "react-hook-form";
import { useState } from "react";
import HookFormInput from "@/shared/components/HookFormInput";
import useAuth from "@/features/auth/hooks/useAuth";

import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { PiDownloadSimple, PiLockFill, PiSpeedometer } from "react-icons/pi";
import Button from "@/shared/components/Button";

const CheckoutForm = ({ product }) => {
  const [serverErrors, setServerErrors] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ mode: "onTouched" });

  const { handleRegister, user } = useAuth();

  const onSubmit = async (data) => {
    setServerErrors({});
    await handleRegister(data, (fieldErrors) => {
      setServerErrors(fieldErrors);
      Object.entries(fieldErrors).forEach(([field, message]) => {
        setError(field, { type: "server", message });
      });
    });
  };

  if (!user) {
    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-7 space-y-5'
        noValidate
      >
        {/* Full Name */}
        <HookFormInput
          id='name'
          label='Full Name'
          placeholder='Jaskirat Singh'
          registration={register("name", {
            required: "Full name is required.",
            pattern: {
              value: /^[a-zA-Z ]{3,30}$/,
              message: "Enter a valid full name.",
            },
          })}
          error={errors.name?.message || serverErrors.name}
          icon={<HiOutlineUser />}
        />

        {/* Email */}
        <HookFormInput
          id='email'
          label='Email Address'
          type='email'
          placeholder='you@example.com'
          registration={register("email", {
            required: "Email is required.",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email.",
            },
          })}
          error={errors.email?.message || serverErrors.email}
          icon={<HiOutlineMail />}
        />

        {/* Phone */}
        <HookFormInput
          id='phone'
          label='Phone no.'
          type='text'
          placeholder='+91 1234567890'
          registration={register("phone", {
            required: "Phone no. is required.",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter a valid phone number.",
            },
          })}
          error={errors.phone?.message || serverErrors.phone}
          icon={<HiOutlinePhone />}
        />

        {/* CTA Button */}

        <Button type='submit'>
          <PiLockFill className='w-5 h-5 text-white' />
          Complete Purchase - ₹{product.price}
        </Button>

        {/* Sign In Link */}
        <p className='text-center text-sm text-slate-500'>
          Already have an account?{" "}
          <a
            href='#signin'
            id='signin-link'
            className='text-violet-400 hover:text-violet-300 font-medium transition-colors'
          >
            Sign in
          </a>
        </p>

        {/* Trust Badges */}
        <div className='border-t border-slate-800/80 pt-4'>
          <div className='flex items-center justify-center gap-6 flex-wrap'>
            <div className='flex items-center gap-1.5 text-slate-500 text-xs'>
              <PiLockFill className='w-4 h-4 text-emerald-400' />
              <span>Secure Payment</span>
            </div>
            <div className='flex items-center gap-1.5 text-slate-500 text-xs'>
              <PiSpeedometer className='w-4 h-4 text-violet-400' />
              <span>Instant Access</span>
            </div>
            <div className='flex items-center gap-1.5 text-slate-500 text-xs'>
              <PiDownloadSimple className='w-4 h-4 text-sky-400' />
              <span>Free Updates</span>
            </div>
          </div>
        </div>
      </form>
    );
  }

  return (
    <div
      className='p-7 space-y-5'
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Button>
        <PiLockFill className='w-5 h-5 text-white' />
        Complete Purchase - ₹{product.price}
      </Button>
    </div>
  );
};

export default CheckoutForm;
