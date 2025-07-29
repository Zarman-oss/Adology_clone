import Image from 'next/image';

export default function WorksSection() {
  return (
    <section className='mt-32 px-4'>
      <div className='flex flex-col items-center gap-14'>
        <p className='uppercase body-1-regular text-grey'>How it works</p>
        <h2 className='heading-2-medium text-white text-center'>
          Meet Your AI Co-Pilot for Creative Strategy
        </h2>

        {/* Card section */}
        <div className='flex flex-col lg:flex-row w-full gap-8 max-w-5xl mx-auto justify-center items-stretch'>
          {/* Left Card */}
          <div className='flex-1 gap-8 rounded-md flex flex-col items-center card-grey p-6 py-8'>
            <h3 className='heading-5-medium text-white'>The Old Way</h3>
            <p className='body-1-regular text-light-silver'>
              Manual & Time-Consuming
            </p>

            <Image
              src='/cardimg.svg'
              width={300}
              height={200}
              alt='cardimg'
              className='w-full max-w-[300px] h-auto'
            />

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
          <div className='flex-1 gap-8 rounded-md flex flex-col items-center card-black p-6 py-8'>
            <h3 className='heading-5-medium text-white'>The New Way</h3>
            <p className='body-1-regular text-light-silver'>
              Let Adology Handle It
            </p>

            <Image
              src='/cardimg.svg'
              width={300}
              height={200}
              alt='cardimg'
              className='w-full max-w-[300px] h-auto'
            />

            {/* Bullets */}
            <div className='flex flex-col w-full mt-10 gap-4'>
              {[
                'AI scans, tags, and analyzes all your past creatives',
                'Identifies what works—and why',
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
