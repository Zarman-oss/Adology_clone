export default function LoginPage() {
  return (
    <div className='bg-primary-900 text-white min-h-screen'>
      {/* Max-width containers */}
      <div className='max-w-7xl p-4 mx-auto sm:flex  items-center justify-center gap-4 sm:flex-wrap '>
        {/* Login Section */}
        <div className='flex-1  px-20 py-10 relative rounded-3xl inline-flex flex-col justify-between items-start'>
          <div className=' left-[106px] top-[257px] absolute opacity-20 bg-blue-200 rounded-full blur-[250px]' />
          <div className='self-stretch flex flex-col justify-start items-start gap-14'>
            <div className='inline-flex justify-start items-center gap-2'>
              <div className='w-6 h-6 relative overflow-hidden'>
                <div className='w-6 h-6 left-0 top-0 absolute bg-blue-50' />
                <div className='w-3 h-3 left-0 top-0 absolute bg-blue-50' />
              </div>
              <div className="justify-start text-white text-2xl font-medium font-['Manrope'] leading-7">
                ADOLOGY AI
              </div>
            </div>
            <div className='self-stretch flex flex-col justify-start items-start gap-8'>
              <div className='self-stretch flex flex-col justify-center items-center gap-4'>
                <div className="self-stretch justify-start text-white text-5xl font-medium font-['Manrope'] leading-[57.60px]">
                  Login an account
                </div>
                <div className="self-stretch justify-start text-white text-lg font-normal font-['Manrope'] leading-relaxed">
                  Describe yourself as clearly so that there are no mistakes
                </div>
              </div>
              <div className='self-stretch flex flex-col justify-start items-center gap-6'>
                <div className='self-stretch px-6 py-4 rounded-[100px] outline outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 inline-flex justify-center items-center gap-2'>
                  <div className='w-6 h-6 relative overflow-hidden'>
                    <div className='w-4 h-4 left-[4.41px] top-[3px] absolute bg-white' />
                  </div>
                  <div className="justify-start text-white text-lg font-semibold font-['Manrope'] leading-relaxed">
                    Continue with Apple
                  </div>
                </div>
                <div className='self-stretch px-6 py-4 rounded-[100px] outline outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 inline-flex justify-center items-center gap-2'>
                  <div className='w-6 h-6 relative overflow-hidden'>
                    <div className='w-5 h-5 left-[2px] top-[2px] absolute bg-yellow-400' />
                    <div className='w-4 h-2 left-[3.15px] top-[2px] absolute bg-orange-600' />
                    <div className='w-4 h-2 left-[3.10px] top-[14.03px] absolute bg-green-500' />
                    <div className='w-2.5 h-2.5 left-[12px] top-[10px] absolute bg-sky-600' />
                  </div>
                  <div className="justify-start text-white text-lg font-semibold font-['Manrope'] leading-relaxed">
                    Continue with Google
                  </div>
                </div>
              </div>
              <div className='self-stretch inline-flex justify-start items-center gap-2'>
                <div className='flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-600' />
                <div className="justify-start text-white text-lg font-normal font-['Manrope'] leading-relaxed">
                  or
                </div>
                <div className='flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-600' />
              </div>
              <div className='self-stretch flex flex-col justify-start items-start gap-6'>
                <div className='self-stretch h-14 px-6 py-4 rounded-[100px] outline outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 inline-flex justify-start items-center gap-2'>
                  <div className="justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-relaxed">
                    Your email
                  </div>
                </div>
                <div className='self-stretch h-14 px-6 py-4 rounded-[100px] outline outline-[0.50px] outline-offset-[-0.50px] outline-zinc-600 inline-flex justify-between items-center'>
                  <div className="justify-start text-zinc-500 text-lg font-normal font-['Manrope'] leading-relaxed">
                    Password
                  </div>
                  <div className='w-6 h-6 relative overflow-hidden'>
                    <div className='w-5 h-4 left-[2px] top-[4px] absolute bg-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='self-stretch flex flex-col justify-start items-start gap-6'>
            <div className='self-stretch px-6 py-4 bg-white rounded-[100px] inline-flex justify-center items-center gap-2'>
              <div className="justify-start text-stone-950 text-lg font-semibold font-['Manrope'] leading-relaxed">
                Login to Account
              </div>
            </div>
            <div className='self-stretch text-center justify-start'>
              <span className="text-white text-lg font-normal font-['Manrope'] leading-relaxed">
                Already have an account?{' '}
              </span>
              <span className="text-white text-lg font-semibold font-['Manrope'] leading-relaxed">
                Create An Account
              </span>
            </div>
          </div>
        </div>
        <div className='flex-1'>img</div>
      </div>
    </div>
  );
}
