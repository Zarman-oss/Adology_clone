import { LucideMegaphone } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import Image from 'next/image';

export default function WhyAdology() {
  return (
    <section className='mt-34 flex flex-col items-center gap-12'>
      <PrimaryButton text='Why Adology?' />
      <h2 className='heading-1-medium text-white text-center'>
        Solutions for Every Team
      </h2>
      {/* Card Container */}

      <div className='flex flex-wrap gap-8 justify-center items-center '>
        {/* card 1 */}

        <div className='max-w-[380px] w-full p-8 rounded-2xl bg-gradient-to-r from-neutral-700/20 via-stone-900 to-neutral-700/20 '>
          <div className='flex flex-col items-start gap-4'>
            <span className='p-3 bg-neutral-700 rounded-[100px]  outline-1 outline-zinc-700 inline-flex justify-start items-center gap-2'>
              <LucideMegaphone color='white ' />
            </span>
            <h2 className='heading-4-medium text-white'>For Marketing Teams</h2>
            <p className='body-2-regular text-grey'>
              Optimize ad spending with detailed creative analysis.
            </p>
          </div>
          {/* divider */}
          <div className='flex items-center gap-4  my-8'>
            <span className='flex-grow h-px bg-divider' />
            <span className='body-2-regular text-grey'>Features</span>
            <span className='flex-grow h-px bg-divider' />
          </div>

          {/* bullets */}
          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className='max-w-[380px]   p-8 rounded-2xl  bg-gradient-to-r from-neutral-700/20 via-stone-900 to-neutral-700/20'>
          <div className='flex flex-col items-start gap-4'>
            <span className='p-3 bg-neutral-700 rounded-[100px]  outline-1 outline-zinc-700 inline-flex justify-start items-center gap-2'>
              <LucideMegaphone color='white ' />
            </span>
            <h2 className='heading-4-medium text-white'>For Marketing Teams</h2>
            <p className='body-2-regular text-grey'>
              Optimize ad spending with detailed creative analysis.
            </p>
          </div>
          {/* divider */}
          <div className='flex items-center gap-4  my-8'>
            <span className='flex-grow h-px bg-divider' />
            <span className='body-2-regular text-grey'>Features</span>
            <span className='flex-grow h-px bg-divider' />
          </div>

          {/* bullets */}
          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className='max-w-[380px]  p-8 rounded-2xl  bg-gradient-to-r from-neutral-700/20 via-stone-900 to-neutral-700/20'>
          <div className='flex flex-col items-start gap-4'>
            <span className='p-3 bg-neutral-700 rounded-[100px]  outline-1 outline-zinc-700 inline-flex justify-start items-center gap-2'>
              <LucideMegaphone color='white ' />
            </span>
            <h2 className='heading-4-medium text-white'>For Marketing Teams</h2>
            <p className='body-2-regular text-grey'>
              Optimize ad spending with detailed creative analysis.
            </p>
          </div>
          {/* divider */}
          <div className='flex items-center gap-4  my-8'>
            <span className='flex-grow h-px bg-divider' />
            <span className='body-2-regular text-grey'>Features</span>
            <span className='flex-grow h-px bg-divider' />
          </div>

          {/* bullets */}
          <div className='flex flex-col items-center gap-4 mt-8'>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/checkbox2.svg'
                width={24}
                height={24}
                alt='checkbox'
              />
              <p className='body-2-regular text-light-silver'>
                Access to detailed creative analysis for smarter ad spend
                decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
