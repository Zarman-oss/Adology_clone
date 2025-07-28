import Image from 'next/image';
export default function Navbar() {
  return (
    <nav className='text-white flex items-center gap-12 justify-between flex-wrap'>
      <div className='flex gap-4'>
        <Image
          src='/Logo.svg'
          alt='site logo'
          width={32}
          height={32}
          className='object-cover'
        />
        <span className='uppercase jakarta'>Adology Ai </span>
      </div>
      <ul className='jakarta-semibold flex gap-48 flex-wrap cursor-pointer'>
        <li>Product</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <button className='jakarta-semibold-1 bg-white text-black rounded-3xl py-4 px-6 cursor-pointer'>
        Request a Demo
      </button>
    </nav>
  );
}
