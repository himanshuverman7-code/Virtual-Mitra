import { useForm } from "react-hook-form";
import InputField from "@/shared/components/InputField";
import useAuth from "@/features/auth/hooks/useAuth";

import { sampleProduct as product } from "../data/productData";
import { HiOutlineMail, HiOutlinePhone, HiOutlineUser } from "react-icons/hi";
import { PiDownloadSimple, PiLockFill, PiSpeedometer } from "react-icons/pi";
import Button from "../../../shared/components/Button";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const { handleRegister, user } = useAuth();

  return (
    <div className='bg-slate-900/80 backdrop-blur-sm border border-slate-800/80 rounded-2xl shadow-2xl overflow-hidden'>

          <div>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className='p-7 space-y-5'
              noValidate
            >
              {/* Full Name */}
              <InputField
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
                error={errors.name?.message}
                icon={<HiOutlineUser />}
              />

              {/* Email */}
              <InputField
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
                error={errors.email?.message}
                icon={<HiOutlineMail />}
              />

              {/* Phone */}
              <InputField
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
                error={errors.phone?.message}
                icon={<HiOutlinePhone />}
              />

              {/* Order Summary */}
              <div className='bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 space-y-2'>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-slate-400'>Product</span>
                  <span className='text-slate-200 font-medium truncate max-w-[180px] text-right'>
                    {product.title}
                  </span>
                </div>
                <div className='flex justify-between items-center text-sm'>
                  <span className='text-slate-400'>Price</span>
                  <span className='text-slate-200'>
                    ${product.price} {product.currency}
                  </span>
                </div>
                <div className='border-t border-slate-700/60 pt-2 flex justify-between items-center'>
                  <span className='text-sm font-semibold text-white'>Total</span>
                  <span className='text-lg font-extrabold text-violet-300'>
                    ${product.price}
                  </span>
                </div>
              </div>

              {/* CTA Button */}

              
              <Button type="submit">
                <PiLockFill className='w-5 h-5 text-white' />
                Complete Purchase - ${product.price}
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
                    <PiLockFill className="w-4 h-4 text-emerald-400" />
                    <span>Secure Payment</span>
                  </div>
                  <div className='flex items-center gap-1.5 text-slate-500 text-xs'>
                    <PiSpeedometer className="w-4 h-4 text-violet-400" />
                    <span>Instant Access</span>
                  </div>
                  <div className='flex items-center gap-1.5 text-slate-500 text-xs'>
                    <PiDownloadSimple className="w-4 h-4 text-sky-400" />
                    <span>Free Updates</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

    </div>
  );
};

export default CheckoutForm;
