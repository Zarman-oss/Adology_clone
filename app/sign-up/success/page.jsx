'use client';
import Image from 'next/image';
import { LucideMegaphone } from 'lucide-react';
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
            <h1 className='heading-1-medium text-white'>Introduce Yourself</h1>
            <p className='body-1-regular text-light-silver mt-2 lg:text-start text-center'>
              We'd love to learn more about you. Could you share a few sentences
              about your background and where you're from?
            </p>
          </div>

          {/* card container */}

          <div className='w-full flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-4'>
            {/* card */}
            <div className=' cursor-pointer max-w-[250px] gap-6 p-6 flex flex-col rounded-xl bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60'>
              <span className=' w-10 h-10 p-2 bg-neutral-700 rounded-[55.56px]  outline-[0.56px] outline-zinc-700 flex justify-start items-center gap-1'>
                <LucideMegaphone color='white' />
              </span>

              <div className='flex flex-col gap-2 '>
                <h2 className='body-1-medium text-white'>Marketing Teams</h2>
                <p className='caption-2-regular text-grey'>
                  Optimize ad spending with detailed creative analysis.
                </p>
              </div>
            </div>
            {/* card */}
            <div className=' cursor-pointer max-w-[250px] gap-6 p-6 flex flex-col rounded-xl bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60'>
              <span className=' w-10 h-10 p-2 bg-neutral-700 rounded-[55.56px]  outline-[0.56px] outline-zinc-700 flex justify-start items-center gap-1'>
                <LucideMegaphone color='white' />
              </span>

              <div className='flex flex-col gap-2 '>
                <h2 className='body-1-medium text-white'>Marketing Teams</h2>
                <p className='caption-2-regular text-grey'>
                  Optimize ad spending with detailed creative analysis.
                </p>
              </div>
            </div>
            {/* card */}
            <div className=' cursor-pointer max-w-[250px] gap-6 p-6 flex flex-col rounded-xl bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60'>
              <span className=' w-10 h-10 p-2 bg-neutral-700 rounded-[55.56px]  outline-[0.56px] outline-zinc-700 flex justify-start items-center gap-1'>
                <LucideMegaphone color='white' />
              </span>

              <div className='flex flex-col gap-2 '>
                <h2 className='body-1-medium text-white'>Marketing Teams</h2>
                <p className='caption-2-regular text-grey'>
                  Optimize ad spending with detailed creative analysis.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className='mt-6 flex flex-col gap-4'>
            <Link href='/sign-up/success'>
              <button className='w-full px-5 py-3 rounded-full bg-info-100 text-black body-1-semibold hover:bg-info-200 cursor-pointer'>
                Create Account
              </button>
            </Link>

            <p className='text-center text-light-silver'>
              Already have an account?{' '}
              <Link
                href='/sign-up'
                className='text-white hover:text-secondary-400'
              >
                Craete An Account
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
