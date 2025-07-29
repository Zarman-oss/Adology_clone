export default function PrimaryButton({ text }) {
  return (
    <div className='px-6 max-w-28 py-4 text-white bg-zinc-900 rounded-[100px] outline-1 outline-white/20 inline-flex justify-start items-center gap-2 cursor-default'>
      <span className=' body-1-regular leading-relaxed'>{text}</span>
    </div>
  );
}
