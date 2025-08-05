'use client';
import PrimaryButton from '@/components/ui/PrimaryButton';
import { modulesData } from '@/data/modulesData';
import Image from 'next/image';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TrendCard from './TrendCard';

export default function ModulesSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='relative'>
      <span className='glow-background'></span>
      <article className='flex flex-col items-center text-center gap-4 mt-24'>
        <h2 className='heading-3-medium text-white'>
          Adology Scales & Streamlines Brands Access to Creative Data
        </h2>
        <p className='text-light-silver heading-5-regular px-6'>
          Generating 150 data points a month on creative means the average
          brand’s access to creative optimization data is minuscule, compared to
          millions of data points optimizing audience.
        </p>
      </article>

      <div className='mt-34 flex flex-col items-center gap-12'>
        <PrimaryButton text='Modules' />
        <h2 className='heading-1-medium text-white text-center'>
          Creative Intelligence at Scale
        </h2>

        {/* Icons */}
        <div className='flex flex-wrap justify-center items-center gap-6'>
          {modulesData.map(({ icon: Icon, bg, color }, index) => (
            <div
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`p-3 cursor-pointer rounded-[55.56px] outline-[0.56px] flex items-center gap-1 transition-all duration-300 ${
                activeIndex === index ? 'bg-white' : bg
              }`}
            >
              <span className='w-8 h-8'>
                <Icon
                  className='h-8 w-8'
                  color={activeIndex === index ? 'black' : color}
                />
              </span>
            </div>
          ))}
        </div>

        {/* Carousel */}
        <div className='max-w-[1100px] w-full p-10 relative'>
          <span className='absolute inset-0 bg-gradient-to-r from-[#3E3E3E] via-[#1F1F1F] via-66% to-[#3E3E3E] opacity-30 rounded-2xl'></span>

          <Swiper
            className='relative z-10'
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            pagination={false}
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {modulesData.map((module, index) => (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center gap-6 text-center px-4'>
                  {/* Icon + Title */}
                  <div className='flex justify-center items-center gap-4'>
                    <div
                      className={`p-3 cursor-pointer ${module.bg} rounded-[55.56px] outline-[0.56px] flex items-center gap-1`}
                    >
                      <span className='w-8 h-8'>
                        <module.icon className='h-8 w-8' color={module.color} />
                      </span>
                    </div>

                    <h2 className='heading-2-medium text-white'>
                      {module.title}
                    </h2>
                  </div>

                  <p className='text-white heading-2-medium leading-10'>
                    {module.highlight}
                  </p>

                  <p className='body-1-regular text-grey leading-relaxed'>
                    {module.description}
                  </p>

                  <span className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-[15vw] px-6 py-4 bg-zinc-900 mb-12 rounded-full outline-1 outline-white/20 flex justify-start items-center gap-2'>
                    <p className='text-white body-1-regular leading-relaxed'>
                      {module.cta}
                    </p>
                    <Image
                      className='cursor-pointer'
                      width={24}
                      height={24}
                      alt='arrow-right'
                      src='arrow-right.svg'
                    />
                  </span>

                  {module.hasTrendCard && (
                    <div className='flex items-center flex-wrap justify-center gap-8'>
                      {Array.from({ length: 3 }).map((_, index) => (
                        <TrendCard key={index} />
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Indicators */}
          <div className='mt-6 flex flex-wrap justify-center items-center gap-4'>
            {modulesData.map((_, index) => (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`w-20 h-2 rounded-[100px] transition-all duration-300 ${
                  activeIndex === index ? 'bg-white' : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
