'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const slides = [
  { id: 1, content: 'Slide 1', bg: 'bg-red-500' },
  { id: 2, content: 'Slide 2', bg: 'bg-green-500' },
  { id: 3, content: 'Slide 3', bg: 'bg-blue-500' },
];

export default function Carousel() {
  return (
    <div className='w-full max-w-2xl mx-auto py-10'>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className='rounded-lg overflow-hidden'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`h-64 flex items-center justify-center text-white text-2xl font-bold ${slide.bg}`}
            >
              {slide.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
