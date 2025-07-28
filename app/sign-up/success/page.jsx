'use client';
import PasswordInput from '@/components/PasswordInput';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import Link from 'next/link';

export default function LoginSuccessPage() {
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
    <div className=' text-white'>
      {/* Max-width container */}
      <div className='max-w-7xl mx-auto grid sm:grid-cols-2 items-start justify-center gap-20'>
        {/* Login Section */}
        <div className='px-2 py-10 relative rounded-3xl flex flex-col'>
          <span className='glow-background'></span>
          <div className='flex flex-col justify-center '>
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
                <span className='heading-1-medium'>Introduce yourself</span>
                <span className=' body-1-regular text-light-silver'>
                  We'd love to learn more about you. Could you share a few
                  sentences about your background and where you're from?
                </span>
              </div>
            </div>

            {/* Card section */}

            <div className='w-64 p-6 bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60 rounded-2xl  outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 inline-flex flex-col justify-start items-start gap-6'>
              <div className='p-2 bg-neutral-700 rounded-[55.56px]  outline-[0.56px] outline-zinc-700 inline-flex justify-start items-center gap-1'>
                <div className='w-6 h-6 relative overflow-hidden'>
                  <span className='w-4 h-4 left-[2.78px] top-[2.78px] absolute  outline-1 outline-offset-[-0.56px] outline-white' />
                </div>
              </div>
              <div className=' flex flex-col justify-start items-start gap-3'>
                <div className="justify-start text-white text-lg font-medium font-['Manrope'] leading-relaxed">
                  Marketing Teams
                </div>
                <div className=" justify-start text-zinc-500 text-xs font-normal font-['Manrope']">
                  Optimize ad spending with detailed creative analysis.
                </div>
              </div>
            </div>

            {/* Login Button and Sign-Up Link */}
            <div className='flex mt-8 items-center justify-center flex-col gap-6'>
              <button className=' cursor-pointer w-full px-6 py-4 bg-info-100 rounded-full flex justify-center text-black body-1-semibold items-center hover:bg-info-200'>
                Create Account
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
          className='py-12 px-2 sm:flex hidden relative transition-all duration-1000 ease-in-out bg-cover bg-center h-screen'
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
