'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({
  placeholder = 'Your password',
  type = 'password',
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative w-full'>
      <input
        type={showPassword ? 'text' : type}
        placeholder={placeholder}
        className='w-full px-6 py-4 pr-12 rounded-full border border-zinc-600 bg-transparent text-light-silver body-1-regular placeholder:text-light-silver focus:outline-none focus:ring-2 focus:ring-secondary-500'
        aria-label='Password'
      />
      <button
        type='button'
        className='absolute right-4 top-1/2 -translate-y-1/2'
        onClick={() => setShowPassword(!showPassword)}
        aria-label={showPassword ? 'Hide password' : 'Show password'}
      >
        {showPassword ? (
          <EyeOff className='h-6 w-6 text-light-silver cursor-pointer' />
        ) : (
          <Eye className='h-6 w-6 text-light-silver cursor-pointer' />
        )}
      </button>
    </div>
  );
}
