'use client';
import PrimaryButton from '@/components/ui/PrimaryButton';
import {
  LightbulbIcon,
  MessageCircle,
  SearchIcon,
  Settings,
} from 'lucide-react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ModulesSection() {
  const modulesData = [
    {
      title: 'Inspire',
      icon: SearchIcon,
      bg: 'bg-white',
      color: 'black',
      highlight:
        'Scans millions of ads, identifying emerging trends before they peak',
      description:
        "Explore the latest trending ads and creative strategies across industries. Our inspiration feature clusters ads by tactics and themes, helping you discover what's working in real-time.",
      cta: 'Discover Creative Inspiration',
      hasTrendCard: true,
    },
    {
      title: 'Strategize',
      icon: LightbulbIcon,
      bg: 'modules-section-icons-bg',
      color: 'white',
      highlight: 'Transforms creative data into strategic insights',
      description:
        'Use AI-driven modules to craft smarter campaigns. Identify top-performing themes, color palettes, and formats tailored to your audience.',
      cta: 'Build Your Strategy',
      hasTrendCard: true,
    },
    {
      title: 'Collaborate',
      icon: MessageCircle,
      bg: 'modules-section-icons-bg',
      color: 'white',
      highlight: 'Enables seamless feedback loops between teams',
      description:
        'Streamline collaboration between creative, marketing, and strategy teams. Track feedback and iterate on creatives in one unified workspace.',
      cta: 'Enhance Teamwork',
      hasTrendCard: true,
    },
    {
      title: 'Optimize',
      icon: Settings,
      bg: 'modules-section-icons-bg',
      color: 'white',
      highlight: 'Optimizes creative performance in real-time',
      description:
        'Leverage performance analytics to test, learn, and scale winning creative variations rapidly across platforms.',
      cta: 'Start Optimizing',
      hasTrendCard: true,
    },
    {
      title: 'Innovate',
      icon: LightbulbIcon,
      bg: 'modules-section-icons-bg',
      color: 'white',
      highlight: 'Pushes boundaries with cutting-edge creative tools',
      description:
        'Experiment with AI-generated concepts and unlock new design directions based on market signals and future-facing trends.',
      cta: 'Fuel Innovation',
      hasTrendCard: true,
    },
    {
      title: 'Experiment',
      icon: LightbulbIcon,
      bg: 'modules-section-icons-bg',
      color: 'white',
      highlight: 'Enables rapid A/B testing at scale',
      description:
        'Test creative variations effortlessly. Gain insights on what resonates best with your target segments before launching at full scale.',
      cta: 'Try New Ideas',
      hasTrendCard: true,
    },
  ];

  return (
    <section className='relative'>
      <span className='glow-background'></span>
      <article className='flex flex-col items-center text-center gap-4 mt-24'>
        <h2 className='heading-3-medium text-white'>
          Adology Scales & Streamlines Brands Access to Creative Data
        </h2>
        <p className='text-light-silver heading-5-regular px-6'>
          Generating 150 data points a month on creative means the average brand
          s access to creative optimization data is minuscule, compared to
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
              className={`p-3 cursor-pointer ${bg} rounded-[55.56px] outline-[0.56px] flex items-center gap-1`}
            >
              <span className='w-8 h-8'>
                <Icon className='h-8 w-8' color={color} />
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

                  {/* Highlight */}
                  <p className='text-center text-white heading-2-medium leading-10'>
                    {module.highlight}
                  </p>

                  {/* Description */}
                  <p className='text-center leading-relaxed body-1-regular text-grey'>
                    {module.description}
                  </p>

                  {/* CTA */}
                  <div className='max-w-[320px] w-full px-6 py-4 bg-zinc-900 mb-12 rounded-[100px] outline-1 outline-white/20 inline-flex justify-start items-center gap-2'>
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
                  </div>

                  {module.hasTrendCard && (
                    <div className='flex flex-wrap items-center justify-center gap-8'>
                      <div className='max-w-[310px] flex flex-col gap-2 w-full rounded-2xl bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60 relative p-2'>
                        <h3 className='heading-5-medium text-white text-center'>
                          Browse Inspiration
                        </h3>

                        <div className='bg-[#1B1B1B] p-4 flex flex-col items-center justify-center gap-4 rounded-lg'>
                          <div className='flex w-full items-center justify-between gap-1'>
                            <div className='flex gap-1'>
                              <LucideVolleyball
                                color='white'
                                height={14}
                                width={14}
                              />
                              <h4 className='text-white jakarta-sm capitalize'>
                                Football and team sport
                              </h4>
                            </div>
                            <div className='px-1 py-1 bg-white rounded-[37.04px] flex justify-start items-center gap-[2.96px]'>
                              <LucideSearch width={8} height={8} />
                              <h5 className='text-black jakarta-xs leading-[9.33px]'>
                                Search Trends
                              </h5>
                            </div>
                          </div>

                          <h4 className='jakarta-sm text-white text-start w-full'>
                            Highlighting Product Benefits with Visual Proof
                          </h4>
                          <p className='text-light-silver jakarta-xs'>
                            A recurring trend in the advertisements from
                            Abercrombie & Fitch, New Balance, Nike, and Under
                            Armour is the focus on sports and athleticism. These
                            ads prominently feature athletes, sports settings,
                            and themes of perseverance, strength, and
                            excellence.
                          </p>

                          <div className='flex gap-1 items-center justify-start w-full'>
                            <LucideMedal width={11} height={11} color='white' />
                            <p className='text-white jakarta-sm'>
                              The best ads on this trend
                            </p>
                          </div>

                          <div className='max-w-[300px] w-full flex flex-wrap items-center justify-center gap-2'>
                            {[1, 2, 3].map((_, i) => (
                              <div
                                key={i}
                                className='flex-1 inner-card-bg rounded-lg'
                              >
                                <div className='flex items-center justify-between p-1'>
                                  <h6 className='jakarta-xs text-white'>
                                    Nike
                                  </h6>
                                  <div className='flex gap-1 items-center'>
                                    <span className='w-[2.96px] h-[2.96px] bg-success-300 rounded-full' />
                                    <span className='jakarta-xs text-white'>
                                      5d
                                    </span>
                                    <Image
                                      src='dots.svg'
                                      width={7}
                                      height={7}
                                      alt='dots'
                                    />
                                  </div>
                                </div>
                                <Image
                                  src='/pic3.png'
                                  width={200}
                                  height={200}
                                  objectFit='contain'
                                  alt='pic'
                                />
                                <div className='p-1 flex justify-between items-center'>
                                  <div className='flex flex-col'>
                                    <p className='jakarta-xxs text-light-silver'>
                                      www.nike.com
                                    </p>
                                    <p className='text-white jakarta-xxs'>
                                      Nike Air Max Plus Drift
                                    </p>
                                  </div>
                                  <button className='p-[2px] text-black jakarta-xxs inner-shop-button rounded-lg'>
                                    Shop Now
                                  </button>
                                </div>
                                <div className='flex p-1'>
                                  <button className='bg-white w-full rounded-xl jakarta-xxs p-1 text-black'>
                                    Save to Inspiration
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Indicators */}
        <div className='flex flex-wrap justify-center items-center gap-4'>
          <span className='w-20 h-2 bg-white rounded-[100px]' />
          <span className='min-w-20 h-2 bg-white/20 rounded-[100px]' />
          <span className='min-w-20 h-2 bg-white/20 rounded-[100px]' />
          <span className='w-20 h-2 bg-white/20 rounded-[100px]' />
          <span className='w-20 h-2 bg-white/20 rounded-[100px]' />
          <span className='w-20 h-2 bg-white/20 rounded-[100px]' />
        </div>
      </div>
    </section>
  );
}
