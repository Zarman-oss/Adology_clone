export default function PrimaryButton({ text }) {
  return (
    <div className='px-2 max-w-42 w-full py-4 text-white bg-zinc-900 rounded-[100px] outline-1 outline-white/20 flex justify-center items-center gap-2 cursor-default'>
      <span className=' body-1-regular leading-relaxed'>{text}</span>
    </div>
  );
}
