import Image from 'next/image';

export default function WorksSection() {
  return (
    <section className='mt-32'>
      <div className='flex flex-col items-center gap-14'>
        <p className='uppercase body-1-regular text-grey'>How it works</p>
        <h2 className='heading-2-medium text-white text-center'>
          Meet Your AI Co-Pilot for Creative Strategy
        </h2>

        {/* Card section */}
        <div className=' max-w-7xl flex flex-col lg:flex-row w-full gap-8 mx-auto justify-center items-center '>
          {/* Left Card */}
          <div className='lg:w-48%  gap-8 rounded-md flex flex-col items-center card-grey p-6 py-8'>
            <h3 className='heading-5-medium text-white'>The Old Way</h3>
            <p className='body-1-regular text-light-silver'>
              Manual & Time-Consuming
            </p>

            <Image src='/work1.svg' width={600} height={300} alt='cardimg' />

            {/* Bullets */}
            <div className='flex flex-col w-full mt-10 gap-4'>
              {[
                'Constant trend research & competitor tracking',
                'Testing hundreds of ads to uncover performance drivers',
                'Testing hundreds of ads to uncover performance drivers', // Consider changing this duplicate
              ].map((text, index) => (
                <div className='flex gap-3' key={index}>
                  <Image
                    src='/checkbox.svg'
                    alt='checkmark'
                    width={24}
                    height={24}
                  />
                  <p className='body-1-regular text-light-silver'>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className='lg:w-48% gap-8 rounded-md flex flex-col items-center card-black p-6 py-8'>
            <h3 className='heading-5-medium text-white'>The New Way</h3>
            <p className='body-1-regular text-light-silver'>
              Let Adology Handle It
            </p>

            <Image src='/work2.svg' width={600} height={300} alt='cardimg' />

            {/* Bullets */}
            <div className='flex flex-col w-full mt-10 gap-4'>
              {[
                'AI scans, tags, and analyzes all your past creatives',
                'Identifies what works—and why so it can function proper',
                'Generates predictive insights on your next best-performing creative',
              ].map((text, index) => (
                <div className='flex gap-3' key={index}>
                  <Image
                    src='/checkbox2.svg'
                    alt='checkmark'
                    width={24}
                    height={24}
                  />
                  <p className='body-1-regular text-light-silver'>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
