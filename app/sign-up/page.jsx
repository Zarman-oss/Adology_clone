import PasswordInput from '@/components/PasswordInput';
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import './styles.css';
import Link from 'next/link';
export default function LoginPage() {
  return (
    <div className=' text-white'>
      {/* Max-width container */}
      <div className='max-w-7xl mx-auto sm:flex items-start justify-center gap-20'>
        {/* Login Section */}
        <div className='flex-1 px-2 py-10 relative rounded-3xl flex flex-col bg-primary-800'>
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
                <span className='heading-1-medium'>Create An Account</span>
                <span className=' body-1-regular text-light-silver'>
                  Describe yourself as clearly so that there are no mistakes
                </span>
              </div>
              {/* Social Login Buttons */}
              <div className=' flex flex-col justify-start items-center gap-6'>
                <button
                  className=' cursor-pointer w-full px-6 py-4 rounded-full border border-zinc-600 flex justify-center items-center gap-2 hover:bg-primary-700'
                  aria-label='Continue with Apple'
                >
                  <Image
                    src='/apple.svg'
                    alt='Login page illustration'
                    width={24}
                    height={24}
                    className='object-cover'
                    priority
                  />
                  <span className='body-1-semibold'>Continue with Apple</span>
                </button>
                <button
                  className=' cursor-pointer w-full px-6 py-4 rounded-full border border-zinc-600 flex justify-center items-center gap-2 hover:bg-primary-700'
                  aria-label='Continue with Google'
                >
                  <Image
                    src='/google.svg'
                    alt='Login page illustration'
                    width={24}
                    height={24}
                    className='object-cover'
                    priority
                  />
                  <span className='body-1-semibold '>Continue with Google</span>
                </button>
              </div>
              {/* Divider */}
              <div className=' flex items-center gap-2'>
                <hr className='flex-1 border-t border-zinc-600' />
                <span className='body-1-regular text-light-silver'>or</span>
                <hr className='flex-1 border-t border-zinc-600' />
              </div>

              {/* Email and Password Inputs */}

              <form action='submit'>
                <div className='flex flex-col justify-start items-center gap-6'>
                  <div className='flex gap-5'>
                    <input
                      type='first_name'
                      placeholder='First Name'
                      className=' w-full px-6 py-4 rounded-full border border-zinc-600 bg-transparent text-light-silver body-1-regular placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
                    />
                    <input
                      type='last_name'
                      placeholder='Last Name'
                      className=' w-full px-6 py-4 rounded-full border border-zinc-600 bg-transparent text-light-silver body-1-regular placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
                    />
                  </div>
                  <input
                    type='email'
                    placeholder='Your email'
                    className=' w-full px-6 py-4 rounded-full border border-zinc-600 bg-transparent text-light-silver body-1-regular placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
                  />
                  <PasswordInput />
                  <PasswordInput placeholder='Confirm Password' />
                  <div className='flex justify-start items-center gap-3 w-full'>
                    <input
                      type='checkbox'
                      name='checkbox'
                      id='checkbox'
                      className='w-4 h-4 '
                    />

                    <p>
                      Yes, I understand and agree to the Adology Terms of
                      Service
                    </p>
                  </div>
                </div>
              </form>
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
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className='flex-1 pl-12 py-10 sm:flex hidden  border border-pink-600'>
          {/* <Swiper className='mySwiper'>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper> */}
          {/* <Image
            src='/LoginPageImage.png'
            alt='Login page illustration'
            width={656}
            height={960}
            className='object-cover rounded-3xl'
            priority
          /> */}
        </div>
      </div>
    </div>
  );
}
