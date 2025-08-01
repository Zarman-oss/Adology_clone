import { LucideMegaphone } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';
import Image from 'next/image';

const bulletPoints = [
  'Access to detailed creative analysis for smarter ad spend decisions.',
  'Collaborative insights to align creative strategy with goals.',
  'Track performance and iterate with actionable feedback loops.',
  'Eliminate guesswork with tested ad frameworks and insights.',
  'Boost ROI with refined creative targeting approaches.',
];

function TeamCard({ title, description }) {
  return (
    <div className='w-full lg:w-[48%] xl:w-[30%] p-8 rounded-2xl bg-gradient-to-r from-neutral-700/20 via-stone-900 to-neutral-700/20'>
      <div className='flex flex-col items-start gap-4'>
        <span className='p-3 bg-neutral-700 rounded-full outline outline-1 outline-zinc-700 inline-flex items-center'>
          <LucideMegaphone color='white' />
        </span>
        <h2 className='heading-4-medium text-white'>{title}</h2>
        <p className='body-2-regular text-grey'>{description}</p>
      </div>

      <div className='flex items-center gap-4 my-8'>
        <span className='flex-grow h-px bg-divider' />
        <span className='body-2-regular text-grey'>Features</span>
        <span className='flex-grow h-px bg-divider' />
      </div>

      <div className='flex flex-col gap-4 mt-8'>
        {bulletPoints.map((text, index) => (
          <div key={index} className='flex gap-4 items-start'>
            <Image src='/checkbox2.svg' width={24} height={24} alt='checkbox' />
            <p className='body-2-regular text-light-silver'>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyAdology() {
  return (
    <section className='mt-34 flex flex-col items-center gap-12'>
      <PrimaryButton text='Why Adology?' />
      <h2 className='heading-1-medium text-white text-center'>
        Solutions for Every Team
      </h2>

      <div className='max-w-7xl w-full flex flex-wrap justify-center gap-8'>
        <TeamCard
          title='For Marketing Teams'
          description='Optimize ad spending with detailed creative analysis.'
        />
        <TeamCard
          title='For Creative Directors'
          description='Enhance team alignment and drive measurable creative success.'
        />
        <TeamCard
          title='For Agencies'
          description='Deliver client-ready insights with professional polish.'
        />
      </div>
    </section>
  );
}
