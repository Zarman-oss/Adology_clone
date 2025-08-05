import { LucideMedal, LucideSearch, LucideVolleyball } from 'lucide-react';
import Image from 'next/image';

export default function TrendCard() {
  return (
    <div className='w-full max-w-[90vw] sm:max-w-[80vw] md:max-w-[45vw] lg:max-w-[30vw] xl:max-w-[22vw] flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60 p-2'>
      <h3 className='heading-5-medium text-white text-center'>
        Browse Inspiration
      </h3>

      <div className='bg-[#1B1B1B] p-4 flex flex-col items-center justify-center gap-4 rounded-lg'>
        {/* Mini header */}
        <div className='flex w-full items-center justify-between gap-1 flex-wrap sm:flex-nowrap'>
          <div className='flex gap-1 items-center'>
            <LucideVolleyball color='white' height={14} width={14} />
            <h4 className='text-white jakarta-sm capitalize'>
              Football and team sport
            </h4>
          </div>
          <div className='px-2 py-1 bg-white rounded-full flex items-center gap-1 text-xs'>
            <LucideSearch width={10} height={10} />
            <span className='text-black jakarta-xs'>Search Trends</span>
          </div>
        </div>

        <h4 className='jakarta-sm text-white text-start w-full'>
          Highlighting Product Benefits with Visual Proof
        </h4>

        <p className='text-light-silver jakarta-xs'>
          A recurring trend in ads from Nike and others is the focus on
          athleticism, sports settings, and themes of perseverance, strength,
          and excellence.
        </p>

        <div className='flex gap-1 items-center justify-start w-full'>
          <LucideMedal width={11} height={11} color='white' />
          <p className='text-white jakarta-sm'>The best ads on this trend</p>
        </div>

        <div className='w-full flex flex-wrap items-center justify-center gap-2'>
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className='w-full sm:w-[48%] md:w-[30%] bg-neutral-800 rounded-lg overflow-hidden'
            >
              <div className='flex items-center justify-between p-1'>
                <h6 className='jakarta-xs text-white'>Nike</h6>
                <div className='flex gap-1 items-center'>
                  <span className='w-1 h-1 bg-success-300 rounded-full' />
                  <span className='jakarta-xs text-white'>5d</span>
                  <Image src='dots.svg' width={7} height={7} alt='dots' />
                </div>
              </div>

              <Image
                src='/pic3.png'
                width={300}
                height={200}
                className='w-full object-cover'
                alt='pic'
              />

              <div className='p-1 flex justify-between items-center'>
                <div className='flex flex-col'>
                  <p className='jakarta-xxs text-light-silver text-xs'>
                    www.nike.com
                  </p>
                  <p className='text-white jakarta-xxs text-xs'>
                    Nike Air Max Plus Drift
                  </p>
                </div>
                <button className='p-[2px] text-black jakarta-xxs inner-shop-button rounded-lg bg-white text-xs'>
                  Shop Now
                </button>
              </div>

              <div className='flex p-1'>
                <button className='bg-white w-full rounded-xl jakarta-xxs p-1 text-black text-xs'>
                  Save to Inspiration
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
