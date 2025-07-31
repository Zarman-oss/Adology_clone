import { LucideMenu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='text-white flex items-center justify-between sm:px-6 lg:px-8 flex-wrap'>
      <div className='flex items-center gap-4'>
        <Image
          src='/Logo.svg'
          alt='site logo'
          width={32}
          height={32}
          className='object-cover'
        />
        <span className='uppercase font-semibold'>Adology AI</span>
      </div>
      <LucideMenu
        className='sm:hidden cursor-pointer'
        color='white'
        size={24}
      />
      <ul className='font-semibold hidden sm:flex justify-between items-center lg:gap-34  cursor-pointer'>
        <li>Product</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
      <button className=' hidden sm:block font-semibold bg-white text-black rounded-3xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer hover:bg-gray-200 transition'>
        Request a Demo
      </button>
    </nav>
  );
}
