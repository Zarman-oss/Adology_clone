import { LucideSpeaker } from 'lucide-react';

export default function SuccessPageCard() {
  return (
    <div className='w-64 p-6 bg-gradient-to-r from-neutral-700/60 via-zinc-800/60 to-neutral-700/60 rounded-2xl  outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 flex flex-col justify-start items-start gap-6'>
      <span className='p-2 bg-neutral-700 rounded-[55.56px]  outline-[0.56px] outline-zinc-700 flex justify-start items-center gap-1'>
        <LucideSpeaker />
      </span>
      <div className=' flex flex-col justify-start items-start gap-3'>
        <h2 className='body-1-medium'>Marketing Teams</h2>
        <p className=" justify-start text-zinc-500 text-xs font-normal font-['Manrope']">
          Optimize ad spending with detailed creative analysis.
        </p>
      </div>
    </div>
  );
}
