import PrimaryButton from '@/components/ui/PrimaryButton';
import {
  SearchIcon,
  LightbulbIcon,
  MessageCircle,
  Settings,
} from 'lucide-react';

export default function ModulesSection() {
  return (
    <section>
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
        <h2 className='heading-1-medium text-white'>
          Creative Intelligence at Scale
        </h2>
        {/* Icons */}
        <div className='flex flex-wrap gap-6'>
          <div className='p-3 bg-white rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <SearchIcon className='h-8 w-8 ' color='black' />
            </span>
          </div>
          {/* 2nd icon */}
          <div className='p-3 modules-section-icons-bg rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <LightbulbIcon className='h-8 w-8 ' color='white' />
            </span>
          </div>
          <div className='p-3 modules-section-icons-bg rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <MessageCircle className='h-8 w-8 ' color='white' />
            </span>
          </div>
          <div className='p-3 modules-section-icons-bg rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <Settings className='h-8 w-8 ' color='white' />
            </span>
          </div>
          <div className='p-3 modules-section-icons-bg rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <LightbulbIcon className='h-8 w-8 ' color='white' />
            </span>
          </div>
          <div className='p-3 modules-section-icons-bg rounded-[55.56px] outline-[0.56px] flex  items-center gap-1'>
            <span className='w-8 h-8'>
              <LightbulbIcon className='h-8 w-8 ' color='white' />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
