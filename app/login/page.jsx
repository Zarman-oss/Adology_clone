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
    <div className='text-white px-4 py-10'>
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20'>
        {/* Login Section */}
        <div className='max-w-[450px] mx-auto lg:w-full  relative rounded-3xl flex flex-col'>
          <span className='glow-background'></span>
          <div className='flex flex-col justify-center'>
            {/* Logo */}
            <div className='flex mb-10 items-center gap-2'>
              <Image src='/Logo.svg' alt='site logo' width={24} height={24} />
              <span className='heading-5-medium'>ADOLOGY AI</span>
            </div>

            {/* Form Content */}
            <div className='flex flex-col gap-6'>
              {/* Heading */}
              <div className='flex flex-col items-start gap-2'>
                <span className='heading-1-medium'>Login an Account</span>
                <span className='body-1-regular text-light-silver'>
                  Describe yourself as clearly so that there are no mistakes
                </span>
              </div>

              {/* Social Buttons */}
              <div className='flex flex-col gap-4'>
                <button className='w-full px-6 py-4 rounded-full border border-zinc-600 flex items-center justify-center gap-2 hover:bg-primary-700'>
                  <Image src='/apple.svg' alt='Apple' width={24} height={24} />
                  <span className='body-1-semibold'>Continue with Apple</span>
                </button>
                <button className='w-full px-6 py-4 rounded-full border border-zinc-600 flex items-center justify-center gap-2 hover:bg-primary-700'>
                  <Image
                    src='/google.svg'
                    alt='Google'
                    width={24}
                    height={24}
                  />
                  <span className='body-1-semibold'>Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className='flex items-center gap-2'>
                <hr className='flex-1 border-zinc-600' />
                <span className='body-1-regular text-light-silver'>or</span>
                <hr className='flex-1 border-zinc-600' />
              </div>

              {/* Email + Password */}
              <div className='flex flex-col gap-4'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='w-full px-6 py-4 rounded-full border border-zinc-600 bg-transparent text-light-silver placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
                />
                <PasswordInput />
              </div>
            </div>

            {/* Submit + Footer Link */}
            <div className='mt-10 flex flex-col gap-6'>
              <button className='w-full px-6 py-4 bg-info-100 text-black rounded-full hover:bg-info-200 body-1-semibold'>
                Login to account
              </button>
              <div className='flex justify-center gap-1'>
                <span className='body-1-regular text-light-silver'>
                  Already have an account?
                </span>
                <Link
                  href='/sign-up'
                  className='body-1-semibold text-secondary-300 hover:text-secondary-400'
                >
                  Create an Account
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div
          className='hidden lg:flex relative w-full lg:w-1/2 min-h-[700px] bg-cover bg-center rounded-2xl transition-all'
          style={{
            backgroundImage: `url(${testimonials[currentIndex].image})`,
          }}
        >
          <span className='absolute inset-0 bg-opacity-60'></span>

          <div className='relative w-full flex flex-col justify-end items-center text-center'>
            <span className='absolute w-full min-h-[458px] left-0 bottom-0 bg-gradient-to-b from-stone-950/0 to-stone-950/80' />

            <div className='z-20 text-left p-4'>
              <p className='heading-3-regular'>
                "{testimonials[currentIndex].quote}"
              </p>
              <h2 className='heading-4-semibold'>
                {testimonials[currentIndex].author}
              </h2>
            </div>

            <div className='flex flex-wrap justify-center gap-3 mb-6 z-20'>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-10 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-white' : 'bg-zinc-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
