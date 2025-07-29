import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className='flex mt-14 flex-col items-center justify-center text-center gap-6'>
      <h1 className='jakarta-semibold-2 text-white uppercase leading-tight max-w-5xl'>
        Optimize Creative. <br />
        Scale Insights. <br />
        Outperform Competitors.
      </h1>

      <p className='max-w-3xl text-base heading-6-regular text-light-silver font-medium'>
        Adology is your AI-powered{' '}
        <span className='text-white font-semibold'>
          Co-Pilot for Creative Strategy
        </span>
        , automating research, tracking trends, and boosting ad performance with
        actionable insights, so you can scale what works and cut what doesnt.
      </p>

      <button className='jakarta-semibold-1 bg-white text-black rounded-3xl py-4 px-6 cursor-pointer'>
        Request a Demo
      </button>
      <div className='relative'>
        <Image
          src='/heroimage.svg'
          alt='site logo'
          width={1080}
          height={800}
          className='object-cover relative z-10'
          priority
        />

        <span className='glow-background'></span>
      </div>

      {/* feature section */}

      <div className='max-w-5xl flex justify-center items-center flex-wrap mt-14'>
        <div className='w-80 flex flex-col justify-start items-center gap-6'>
          <span className='text-white heading-1-semibold leading-[57.60px]'>
            20H
          </span>
          <p className='body-1-regular text-grey leading-relaxed capitalize'>
            Hours a week saved
          </p>
        </div>
        <div className='w-80 flex flex-col justify-start items-center gap-6'>
          <span className='text-white heading-1-semibold leading-[57.60px]'>
            +20%
          </span>
          <p className='body-1-regular text-grey leading-relaxed capitalize'>
            Increase in performance
          </p>
        </div>
        <div className='w-80 flex flex-col justify-start items-center gap-6'>
          <span className='text-white heading-1-semibold leading-[57.60px]'>
            5x
          </span>
          <p className='body-1-regular text-grey leading-relaxed capitalize'>
            Higher ad win rate
          </p>
        </div>
      </div>
    </section>
  );
}
