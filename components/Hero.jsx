import Image from 'next/image';
export default function Hero() {
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
          width={800}
          height={1200}
          className='object-cover'
          priority
        />

        <span className='glow-background'></span>
      </div>
    </section>
  );
}
