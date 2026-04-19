import { lazy, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  PiPlusBold,
  PiPackageBold,
  PiCurrencyInrBold,
  PiTagBold,
  PiImageBold,
  PiLinkBold,
  PiFileTextBold,
  PiStarBold,
  PiChatCircleTextBold,
  PiQuestionBold,
  PiCheckCircleBold,
  PiListBulletsBold,
  PiToggleRightFill,
  PiSparkle,
  PiArrowLeftBold,
} from "react-icons/pi";
import useDynamic from "@/features/products/hooks/useDynamic";
const HookFormInput = lazy(() => import("@/shared/components/HookFormInput"));
const Button = lazy(() => import("@/shared/components/Button"));
const FormSection = lazy(
  () => import("@/features/products/sections/create-product/FormSection"),
);
const DynamicListItem = lazy(
  () => import("@/features/products/sections/create-product/DynamicListItem"),
);
const TestimonialsCard = lazy(
  () => import("@/features/products/sections/create-product/ToggleSwitch"),
);
const FAQCard = lazy(
  () => import("@/features/products/sections/create-product/ToggleSwitch"),
);
const ToggleSwitch = lazy(
  () => import("@/features/products/sections/create-product/ToggleSwitch"),
);

/* ═══════════════════════════════════════════════════════════
   Main Page: CreateProduct
   ═══════════════════════════════════════════════════════════ */
const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      currency: "INR",
    },
  });

  const {
    fi,
    // includes,
    // testimonials,
    // faqs,
    addFeatures,
    // initializeValues,
  } = useDynamic();
  
  const [features, setFeatures] = useState([]);
  useEffect(()=>{
    fi
  }, [features])
  
  // --- Dynamic Lists State ---
  const [featureInput, setFeatureInput] = useState("");

  const [includes, setIncludes] = useState([]);
  const [includeInput, setIncludeInput] = useState("");

  const [testimonials, setTestimonials] = useState([]);
  const [testimonialForm, setTestimonialForm] = useState({
    name: "",
    comment: "",
    rating: 5,
  });

  const [faqs, setFaqs] = useState([]);
  const [faqForm, setFaqForm] = useState({ question: "", answer: "" });

  const [isActive, setIsActive] = useState(true);

  // Watch thumbnail URL for live preview
  const thumbnailUrl = watch("thumbnail");

  // --- Handlers ---
  const addFeature = () => {
    const val = featureInput.trim();
    if (val && !features.includes(val)) {
      setFeatures((prev) => [...prev, val]);
      setFeatureInput("");
    }
    addFeatures(val)
    console.log(fi);
    
  };

  const addInclude = () => {
    const val = includeInput.trim();
    if (val && !includes.includes(val)) {
      setIncludes((prev) => [...prev, val]);
      setIncludeInput("");
    }
  };

  const addTestimonial = () => {
    const { name, comment, rating } = testimonialForm;
    if (name.trim() && comment.trim()) {
      setTestimonials((prev) => [
        ...prev,
        { name: name.trim(), comment: comment.trim(), rating: Number(rating) },
      ]);
      setTestimonialForm({ name: "", comment: "", rating: 5 });
    }
  };

  const addFaq = () => {
    if (faqForm.question.trim() && faqForm.answer.trim()) {
      setFaqs((prev) => [
        ...prev,
        {
          question: faqForm.question.trim(),
          answer: faqForm.answer.trim(),
        },
      ]);
      setFaqForm({ question: "", answer: "" });
    }
  };

  const onSubmit = (data) => {
    const productData = {
      ...data,
      price: Number(data.price),
      features,
      includes,
      testimonials,
      faq: faqs,
      is_active: isActive,
    };
    console.log("Product Data:", productData);
    // Future: call API to create product
  };

  return (
    <div className='min-h-screen'>
      {/* Background decorative blobs */}
      <div className='fixed inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl' />
        <div className='absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/5 rounded-full blur-3xl' />
      </div>

      <div className='relative max-w-5xl mx-auto px-4 py-10 lg:py-16'>
        {/* ── Page Header ── */}
        <div className='mb-10'>
          <Link
            to='/'
            className='inline-flex items-center gap-2 text-sm text-slate-400 hover:text-violet-400 transition-colors duration-200 mb-6'
          >
            <PiArrowLeftBold className='w-4 h-4' />
            Back to Dashboard
          </Link>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-600/30'>
              <PiPlusBold className='w-6 h-6 text-white' />
            </div>
            <div>
              <h1 className='text-2xl font-bold text-white'>
                Create New Product
              </h1>
              <p className='text-sm text-slate-400 mt-0.5'>
                Fill in the details below to add a new digital product
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
            {/* ═══════════════ LEFT COLUMN (3/5) ═══════════════ */}
            <div className='lg:col-span-3 space-y-6'>
              {/* ── Basic Info ── */}
              <FormSection
                icon={<PiPackageBold className='w-5 h-5 text-violet-400' />}
                title='Basic Information'
                subtitle='Product title, category, and description'
              >
                <HookFormInput
                  id='create-title'
                  label='Product Title'
                  placeholder='e.g. Ultimate UI Kit for Figma'
                  registration={register("title", {
                    required: "Product title is required.",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters.",
                    },
                  })}
                  error={errors.title?.message}
                  icon={<PiSparkle />}
                />

                <HookFormInput
                  id='create-category'
                  label='Category'
                  placeholder='e.g. Design Assets, Templates, Courses'
                  registration={register("category", {
                    required: "Category is required.",
                  })}
                  error={errors.category?.message}
                  icon={<PiTagBold />}
                />

                {/* Description (textarea) */}
                <div className='flex flex-col gap-1.5'>
                  <label
                    htmlFor='create-description'
                    className='text-sm font-medium text-slate-300'
                  >
                    Description
                  </label>
                  <div className='relative'>
                    <span className='absolute left-3.5 top-3.5 text-slate-500'>
                      <PiFileTextBold />
                    </span>
                    <textarea
                      id='create-description'
                      rows={4}
                      placeholder='Describe your product in detail...'
                      {...register("description", {
                        required: "Description is required.",
                        minLength: {
                          value: 20,
                          message:
                            "Description must be at least 20 characters.",
                        },
                      })}
                      className={`w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 pl-10 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none ${
                        errors.description
                          ? "border-rose-500/70 focus:border-rose-500 focus:ring-rose-500/20"
                          : ""
                      }`}
                    />
                  </div>
                  {errors.description && (
                    <p className='text-xs text-rose-400'>
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </FormSection>

              {/* ── Features ── */}
              <FormSection
                icon={<PiListBulletsBold className='w-5 h-5 text-violet-400' />}
                title='Features'
                subtitle='List the key features of your product'
              >
                <div className='flex items-end gap-2'>
                  <div className='flex-1'>
                    <label className='text-sm font-medium text-slate-300 block mb-1.5'>
                      Add Feature
                    </label>
                    <input
                      id='create-feature-input'
                      type='text'
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addFeature())
                      }
                      placeholder='e.g. 500+ UI components'
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                    />
                  </div>
                  <button
                    type='button'
                    onClick={addFeature}
                    className='h-[46px] px-4 bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-violet-400 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-sm font-medium'
                  >
                    <PiPlusBold className='w-4 h-4' />
                    Add
                  </button>
                </div>
                {fi.length > 0 && (
                  <div className='space-y-2'>
                    {fi.map((f, i) => (
                      <DynamicListItem
                        key={`${f}-${i}`}
                        value={f}
                        index={i}
                        onRemove={(idx) =>
                          setFeatures((prev) =>
                            prev.filter((_, j) => j !== idx),
                          )
                        }
                      />
                    ))}
                  </div>
                )}
                {fi.length === 0 && (
                  <p className='text-xs text-slate-500 text-center py-3'>
                    No features added yet. Add at least one feature.
                  </p>
                )}
              </FormSection>

              {/* ── Includes ── */}
              <FormSection
                icon={<PiCheckCircleBold className='w-5 h-5 text-violet-400' />}
                title="What's Included"
                subtitle='Files and resources included with the product'
              >
                <div className='flex items-end gap-2'>
                  <div className='flex-1'>
                    <label className='text-sm font-medium text-slate-300 block mb-1.5'>
                      Add Item
                    </label>
                    <input
                      id='create-include-input'
                      type='text'
                      value={includeInput}
                      onChange={(e) => setIncludeInput(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && (e.preventDefault(), addInclude())
                      }
                      placeholder='e.g. Figma file, Documentation PDF'
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                    />
                  </div>
                  <button
                    type='button'
                    onClick={addInclude}
                    className='h-[46px] px-4 bg-violet-600/20 hover:bg-violet-600/40 border border-violet-500/30 text-violet-400 rounded-xl transition-all duration-200 flex items-center gap-1.5 text-sm font-medium'
                  >
                    <PiPlusBold className='w-4 h-4' />
                    Add
                  </button>
                </div>
                {includes.length > 0 && (
                  <div className='flex flex-wrap gap-2'>
                    {includes.map((item, i) => (
                      <span
                        key={`${item}-${i}`}
                        className='flex items-center gap-1.5 bg-slate-700/60 border border-slate-600/50 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-lg group animate-fadeIn'
                      >
                        <PiCheckCircleBold className='w-3.5 h-3.5 text-violet-400' />
                        {item}
                        <button
                          type='button'
                          onClick={() =>
                            setIncludes((prev) =>
                              prev.filter((_, j) => j !== i),
                            )
                          }
                          className='ml-1 text-slate-500 hover:text-rose-400 transition-colors'
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                {includes.length === 0 && (
                  <p className='text-xs text-slate-500 text-center py-3'>
                    No items added yet.
                  </p>
                )}
              </FormSection>

              {/* ── Testimonials ── */}
              <FormSection
                icon={
                  <PiChatCircleTextBold className='w-5 h-5 text-violet-400' />
                }
                title='Testimonials'
                subtitle='Add customer reviews to build trust'
              >
                <div className='space-y-3 bg-slate-800/30 rounded-xl p-4 border border-slate-700/40'>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                    <div>
                      <label className='text-xs font-medium text-slate-400 block mb-1'>
                        Customer Name
                      </label>
                      <input
                        id='create-testimonial-name'
                        type='text'
                        value={testimonialForm.name}
                        onChange={(e) =>
                          setTestimonialForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        placeholder='e.g. Amit Sharma'
                        className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                      />
                    </div>
                    <div>
                      <label className='text-xs font-medium text-slate-400 block mb-1'>
                        Rating
                      </label>
                      <div className='flex items-center gap-1 bg-slate-800/60 border border-slate-700/70 rounded-xl px-3 py-2.5'>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type='button'
                            onClick={() =>
                              setTestimonialForm((prev) => ({
                                ...prev,
                                rating: star,
                              }))
                            }
                            className='transition-all duration-150 hover:scale-125'
                          >
                            <PiStarBold
                              className={`w-5 h-5 ${
                                star <= testimonialForm.rating
                                  ? "text-amber-400"
                                  : "text-slate-600"
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className='text-xs font-medium text-slate-400 block mb-1'>
                      Comment
                    </label>
                    <textarea
                      id='create-testimonial-comment'
                      rows={2}
                      value={testimonialForm.comment}
                      onChange={(e) =>
                        setTestimonialForm((prev) => ({
                          ...prev,
                          comment: e.target.value,
                        }))
                      }
                      placeholder='Write the customer testimonial...'
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none'
                    />
                  </div>
                  <button
                    type='button'
                    onClick={addTestimonial}
                    className='w-full py-2.5 bg-violet-600/15 hover:bg-violet-600/30 border border-violet-500/25 border-dashed text-violet-400 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium'
                  >
                    <PiPlusBold className='w-4 h-4' />
                    Add Testimonial
                  </button>
                </div>
                {testimonials.length > 0 && (
                  <div className='space-y-3'>
                    {testimonials.map((t, i) => (
                      <TestimonialCard
                        key={`${t.name}-${i}`}
                        testimonial={t}
                        index={i}
                        onRemove={(idx) =>
                          setTestimonials((prev) =>
                            prev.filter((_, j) => j !== idx),
                          )
                        }
                      />
                    ))}
                  </div>
                )}
              </FormSection>

              {/* ── FAQ ── */}
              <FormSection
                icon={<PiQuestionBold className='w-5 h-5 text-violet-400' />}
                title='FAQ'
                subtitle='Frequently asked questions about the product'
              >
                <div className='space-y-3 bg-slate-800/30 rounded-xl p-4 border border-slate-700/40'>
                  <div>
                    <label className='text-xs font-medium text-slate-400 block mb-1'>
                      Question
                    </label>
                    <input
                      id='create-faq-question'
                      type='text'
                      value={faqForm.question}
                      onChange={(e) =>
                        setFaqForm((prev) => ({
                          ...prev,
                          question: e.target.value,
                        }))
                      }
                      placeholder='e.g. Can I use this for commercial projects?'
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200'
                    />
                  </div>
                  <div>
                    <label className='text-xs font-medium text-slate-400 block mb-1'>
                      Answer
                    </label>
                    <textarea
                      id='create-faq-answer'
                      rows={2}
                      value={faqForm.answer}
                      onChange={(e) =>
                        setFaqForm((prev) => ({
                          ...prev,
                          answer: e.target.value,
                        }))
                      }
                      placeholder='Provide a clear answer...'
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-3 py-2.5 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 resize-none'
                    />
                  </div>
                  <button
                    type='button'
                    onClick={addFaq}
                    className='w-full py-2.5 bg-violet-600/15 hover:bg-violet-600/30 border border-violet-500/25 border-dashed text-violet-400 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium'
                  >
                    <PiPlusBold className='w-4 h-4' />
                    Add FAQ
                  </button>
                </div>
                {faqs.length > 0 && (
                  <div className='space-y-3'>
                    {faqs.map((f, i) => (
                      <FAQCard
                        key={`${f.question}-${i}`}
                        faq={f}
                        index={i}
                        onRemove={(idx) =>
                          setFaqs((prev) => prev.filter((_, j) => j !== idx))
                        }
                      />
                    ))}
                  </div>
                )}
              </FormSection>
            </div>

            {/* ═══════════════ RIGHT COLUMN (2/5) - Sticky ═══════════════ */}
            <div className='lg:col-span-2 space-y-6'>
              <div className='lg:sticky lg:top-24 space-y-6'>
                {/* ── Pricing ── */}
                <FormSection
                  icon={
                    <PiCurrencyInrBold className='w-5 h-5 text-violet-400' />
                  }
                  title='Pricing'
                  subtitle='Set the price and currency'
                >
                  <HookFormInput
                    id='create-price'
                    label='Price'
                    type='number'
                    placeholder='e.g. 2000'
                    registration={register("price", {
                      required: "Price is required.",
                      min: { value: 0, message: "Price cannot be negative." },
                    })}
                    error={errors.price?.message}
                    icon={<PiCurrencyInrBold />}
                  />

                  <div className='flex flex-col gap-1.5'>
                    <label
                      htmlFor='create-currency'
                      className='text-sm font-medium text-slate-300'
                    >
                      Currency
                    </label>
                    <select
                      id='create-currency'
                      {...register("currency")}
                      className='w-full bg-slate-800/60 border border-slate-700/70 rounded-xl px-4 py-3 text-sm text-slate-100 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all duration-200 appearance-none cursor-pointer'
                    >
                      <option value='INR'>INR (₹)</option>
                      <option value='USD'>USD ($)</option>
                      <option value='EUR'>EUR (€)</option>
                      <option value='GBP'>GBP (£)</option>
                    </select>
                  </div>
                </FormSection>

                {/* ── Media & Links ── */}
                <FormSection
                  icon={<PiImageBold className='w-5 h-5 text-violet-400' />}
                  title='Media & Links'
                  subtitle='Thumbnail and download URL'
                >
                  <HookFormInput
                    id='create-thumbnail'
                    label='Thumbnail URL'
                    placeholder='https://example.com/image.jpg'
                    registration={register("thumbnail", {
                      required: "Thumbnail URL is required.",
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Enter a valid URL.",
                      },
                    })}
                    error={errors.thumbnail?.message}
                    icon={<PiImageBold />}
                  />

                  {/* Thumbnail Preview */}
                  {thumbnailUrl && /^https?:\/\/.+/.test(thumbnailUrl) && (
                    <div className='relative h-36 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50'>
                      <img
                        src={thumbnailUrl}
                        alt='Thumbnail preview'
                        className='w-full h-full object-cover opacity-80'
                        onError={(e) => (e.target.style.display = "none")}
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
                      <span className='absolute bottom-2 left-3 text-xs text-slate-300 flex items-center gap-1'>
                        <PiEyeBold className='w-3.5 h-3.5' />
                        Preview
                      </span>
                    </div>
                  )}

                  <HookFormInput
                    id='create-file-url'
                    label='File Download URL'
                    placeholder='https://example.com/download/file'
                    registration={register("file_url", {
                      required: "File URL is required.",
                      pattern: {
                        value: /^https?:\/\/.+/,
                        message: "Enter a valid URL.",
                      },
                    })}
                    error={errors.file_url?.message}
                    icon={<PiLinkBold />}
                  />
                </FormSection>

                {/* ── Status ── */}
                <FormSection
                  icon={
                    isActive ? (
                      <PiToggleRightFill className='w-5 h-5 text-emerald-400' />
                    ) : (
                      <PiToggleLeftBold className='w-5 h-5 text-slate-500' />
                    )
                  }
                  title='Product Status'
                  subtitle='Control product visibility'
                >
                  <ToggleSwitch
                    checked={isActive}
                    onChange={setIsActive}
                    label='Active'
                    description={
                      isActive
                        ? "Product is visible and available for purchase"
                        : "Product is hidden from the storefront"
                    }
                  />
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
                      isActive
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                        : "bg-slate-700/30 border border-slate-700/40 text-slate-500"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isActive
                          ? "bg-emerald-400 animate-pulse"
                          : "bg-slate-600"
                      }`}
                    />
                    {isActive ? "Live" : "Draft"}
                  </div>
                </FormSection>

                {/* ── Submit Button ── */}
                <div className='space-y-3'>
                  <Button type='submit' className='shadow-xl'>
                    <PiPlusBold className='w-5 h-5 text-white' />
                    Create Product
                  </Button>
                  <p className='text-center text-xs text-slate-500'>
                    You can edit this product after creation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Inline keyframe for fade-in animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default CreateProduct;
