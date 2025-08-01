'use client';
import PasswordInput from '@/components/PasswordInput';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const testimonials = [
    {
      quote:
        'Adology transformed our ad strategies with research-driven insights, boosting engagement and performance. Excited to continue working with them!',
      author: 'Sarah J - VP of Marketing',
      image: '/pic2.png',
    },
    {
      quote:
        'The AI-driven insights from Adology have revolutionized our campaigns, delivering unmatched results.',
      author: 'Michael T - CMO',
      image: '/pic2.png',
    },
    {
      quote:
        'With Adology, our ad performance skyrocketed thanks to their innovative approach and expertise.',
      author: 'Emily R - Marketing Director',
      image: '/pic2.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-center gap-12'>
      {/* Form Section */}
      <div className='w-full lg:w-1/2 relative z-10'>
        <span className='glow-background-2'></span>

        {/* Logo */}
        <div className='flex items-center gap-2 mb-10'>
          <Image src='/Logo.svg' alt='Logo' width={24} height={24} priority />
          <span className='heading-5-medium text-white'>ADOLOGY AI</span>
        </div>

        {/* Form Container */}
        <div className='flex flex-col gap-6'>
          <div>
            <h1 className='heading-1-medium text-white'>login An Account</h1>
            <p className='body-1-regular text-light-silver mt-2'>
              Describe yourself clearly so there are no mistakes
            </p>
          </div>

          {/* Social Buttons */}
          <div className='flex flex-col gap-4'>
            <button className='w-full px-5 py-3 rounded-full border border-zinc-600 flex items-center justify-center gap-2 hover:bg-primary-700 cursor-pointer'>
              <Image src='/apple.svg' alt='Apple' width={24} height={24} />
              <span className='body-1-semibold text-white'>
                Continue with Apple
              </span>
            </button>
            <button className='w-full px-5 py-3 rounded-full border border-zinc-600 flex items-center justify-center gap-2 hover:bg-primary-700 cursor-pointer'>
              <Image src='/google.svg' alt='Google' width={24} height={24} />
              <span className='body-1-semibold text-white'>
                Continue with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className='flex items-center gap-2'>
            <hr className='flex-1 border-t border-zinc-600' />
            <span className='text-light-silver body-1-regular'>or</span>
            <hr className='flex-1 border-t border-zinc-600' />
          </div>

          {/* Form Fields */}
          <form className='flex flex-col gap-4'>
            <input
              type='email'
              placeholder='Your email'
              className='w-full px-5 py-3 rounded-full border border-zinc-600 bg-transparent text-light-silver placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
            />
            <PasswordInput />
          </form>

          {/* CTA Button */}
          <div className='mt-6 flex flex-col gap-4'>
            <button className='w-full px-5 py-3 rounded-full bg-info-100 text-black body-1-semibold hover:bg-info-200 cursor-pointer'>
              Login to Account
            </button>
            <p className='text-center text-light-silver'>
              Already have an account?{' '}
              <Link
                href='/sign-up'
                className='text-white hover:text-secondary-400'
              >
                Create An Account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Carousel */}
      <div
        className='hidden lg:flex w-full lg:w-1/2 min-h-[700px] rounded-2xl bg-cover bg-center p-6 relative transition-all duration-1000'
        style={{
          backgroundImage: `url(${testimonials[currentIndex].image})`,
        }}
      >
        <div className='z-10 flex flex-col justify-end items-center text-center text-white w-full'>
          <p className='heading-4-regular max-w-lg'>
            " {testimonials[currentIndex].quote} "
          </p>
          <p className='heading-4-semibold mt-2'>
            {testimonials[currentIndex].author}
          </p>
          <div className='flex gap-2 mt-6'>
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 w-8 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
