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
      image: '/LoginPageImage.png',
    },
    {
      quote:
        'The AI-driven insights from Adology have revolutionized our campaigns, delivering unmatched results.',
      author: 'Michael T - CMO',
      image: '/pic1.jpg',
    },
    {
      quote:
        'With Adology, our ad performance skyrocketed thanks to their innovative approach and expertise.',
      author: 'Emily R - Marketing Director',
      image: '/pic1.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='text-white'>
      <div className='max-w-7xl mx-auto grid sm:grid-cols-2 items-start justify-center gap-20'>
        {/* Login Section */}
        <div className='px-2 py-10 relative rounded-3xl flex flex-col'>
          <span className='glow-background'></span>
          <div className='flex flex-col justify-center'>
            {/* Logo and Title */}
            <div className='flex mb-14 justify-start items-center gap-2'>
              <Image
                src='/Logo.svg'
                alt='site logo'
                width={24}
                height={24}
                className='object-cover'
                priority
              />
              <span className='heading-5-medium'>ADOLOGY AI</span>
            </div>

            {/* Container 1 */}
            <div className='flex flex-col gap-8'>
              {/* Heading and Description */}
              <div className='flex flex-col justify-center items-start gap-4'>
                <span className='heading-1-medium'>Login an Account</span>
                <span className='body-1-regular text-light-silver'>
                  Describe yourself as clearly so that there are no mistakes
                </span>
              </div>

              {/* Social Login Buttons */}
              <div className='flex flex-col justify-start items-center gap-6'>
                <button
                  className='cursor-pointer w-full px-6 py-4 rounded-full border border-zinc-600 flex justify-center items-center gap-2 hover:bg-primary-700'
                  aria-label='Continue with Apple'
                >
                  <Image
                    src='/apple.svg'
                    alt='Apple'
                    width={24}
                    height={24}
                    className='object-cover'
                    priority
                  />
                  <span className='body-1-semibold'>Continue with Apple</span>
                </button>
                <button
                  className='cursor-pointer w-full px-6 py-4 rounded-full border border-zinc-600 flex justify-center items-center gap-2 hover:bg-primary-700'
                  aria-label='Continue with Google'
                >
                  <Image
                    src='/google.svg'
                    alt='Google'
                    width={24}
                    height={24}
                    className='object-cover'
                    priority
                  />
                  <span className='body-1-semibold'>Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className='flex items-center gap-2'>
                <hr className='flex-1 border-t border-zinc-600' />
                <span className='body-1-regular text-light-silver'>or</span>
                <hr className='flex-1 border-t border-zinc-600' />
              </div>

              {/* Inputs */}
              <div className='flex flex-col justify-start items-center gap-6'>
                <input
                  type='email'
                  placeholder='Your email'
                  className='w-full px-6 py-4 rounded-full border border-zinc-600 bg-transparent text-light-silver body-1-regular placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
                />
                <PasswordInput />
              </div>
            </div>

            {/* Login Button and Link */}
            <div className='flex mt-28 items-center justify-center flex-col gap-6'>
              <button className='cursor-pointer w-full px-6 py-4 bg-info-100 rounded-full flex justify-center text-black body-1-semibold items-center hover:bg-info-200'>
                Login to account
              </button>

              <div className='flex gap-1'>
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
          className='p-16 sm:flex hidden relative min-h-screen transition-all duration-1000 ease-in-out bg-cover bg-center'
          style={{
            backgroundImage: `url(${testimonials[currentIndex].image})`,
          }}
        >
          <span className='absolute inset-0  bg-opacity-60'></span>

          <div className='relative z-10 flex flex-col justify-end items-center gap-4 text-center text-white'>
            <p className='heading-4-regular max-w-lg'>
              "{testimonials[currentIndex].quote}"
            </p>
            <p className='heading-4-semibold'>
              {testimonials[currentIndex].author}
            </p>

            <div className='flex flex-wrap gap-4 mt-4'>
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 w-8 rounded-full transition-all duration-300 ${
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
