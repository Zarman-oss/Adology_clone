import PrimaryButton from '@/components/ui/PrimaryButton';

export default function ProblemSection() {
  return (
    <section className='flex flex-col items-center text-white mt-32 gap-10 px-4'>
      <PrimaryButton text='Problem' />
      <div className='max-w-5xl text-center'>
        <h2 className='heading-2-medium'>
          Every year, marketing teams burn $125B on ad creatives that don’t
          convert
        </h2>

        <div className='w-full max-w-3xl mx-auto flex flex-col gap-4 text-left mt-6'>
          <p className='heading-6-normal leading-normal'>
            <strong>Creative drives 47%</strong> of ad performance, yet remains
            the least optimized part of the strategy.
          </p>

          <p className='heading-6-normal leading-normal'>
            Why? Because fixing creative waste is hard:
          </p>

          <ul className='heading-6-normal leading-normal list-disc pl-5'>
            <li>Testing hundreds of ads just to find out what works.</li>
            <li>Hiring data science + creative hybrids (good luck!).</li>
            <li>Spending 50% of a strategist’s time on research.</li>
            <li>
              Dedicating 50% of an analyst’s time to manual tagging & reporting.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
