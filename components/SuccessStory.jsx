import PrimaryButton from '@/components/ui/PrimaryButton';
import Image from 'next/image';

export default function SuccessStory() {
  return (
    <section className='flex flex-col relative items-center mt-34 gap-12'>
      <span className='glow-background'></span>
      <PrimaryButton text='Success Stories' />
      <h2 className='heading-1-medium text-white text-center'>
        Trusted by Leading Brands and Agencies
      </h2>
      {/* testimonials */}
      <div className='max-w-[1200px] w-full p-6 flex flex-col gap-12 grad gradient rounded-xl'>
        <p className='jakarta text-light-silver'>
          “Adology has transformed our approach to ad creatives. The trend
          detection and performance scoring helped us boost our ad win rate by
          40% and scale by 5X in just three months. Highly recommend!”
        </p>
        <div className='flex items-center justify-between'>
          <div className='flex gap-2'>
            <div className='flex'>
              <Image src='/pch-logo.svg' width={48} height={48} alt='quotes' />
              <Image
                src='/photo-profile.svg'
                width={48}
                height={48}
                alt='quotes'
                className='relative right-[10%] z-10'
              />
            </div>
            <article className='flex flex-col '>
              <h3 className='heading-6-medium text-white'>John Andrade</h3>
              <p className='body-regular text-light-silver'>
                Chief Growth Officer
              </p>
            </article>
          </div>

          <Image src='/quotes.svg' width={48} height={48} alt='quotes' />
        </div>
      </div>
    </section>
  );
}
