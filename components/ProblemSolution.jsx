import { LucideChartBarBig } from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

export default function ProblemSolution() {
  return (
    <section className='mt-12 md:mt-24 flex flex-col items-center gap-6 md:gap-8 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <PrimaryButton text='Problem' />
      <article className='flex flex-col items-center text-center'>
        <h2 className='text-2xl md:text-3xl font-medium capitalize text-white'>
          How It Works: The AI Workflow
        </h2>
        <p className='text-base md:text-lg text-white mt-4 max-w-3xl'>
          Step 1: Input Competitor Messaging, Trend Data, and Your Creative
          Performance.
          <br />
          Step 2: AI Scans, Normalizes & Structures Your Data.
          <br />
          Step 3: AI Applies Marketing Frameworks to Generate Insights.
          <br />
          Step 4: AI Delivers Actionable Recommendations to Improve Creative
          Strategy.
        </p>
      </article>
      <PrimaryButton text='Benefits' />
      <article className='flex flex-col items-center text-center'>
        <h2 className='text-2xl md:text-3xl font-medium capitalize text-white max-w-3xl'>
          Get Days of Research in Minutes. Adology’s AI analyzes and labels your
          creative data instantly, uncovering insights that typically take
          weeks.
        </h2>
        <ul className='text-base md:text-lg text-white list-disc mt-4 max-w-3xl mx-auto pl-6'>
          <li>Find High-Performing Ad Trends with AI-driven analysis.</li>
          <li>
            Swipe Winning Creative Playbooks—know exactly what works and why.
          </li>
          <li>
            Automate Creative Reports—track trends, get AI-powered briefs, and
            never miss a beat.
          </li>
          <li>
            Real-Time AI Alerts—monitor competitor trends and creative shifts
            before they happen.
          </li>
        </ul>
      </article>
      <PrimaryButton text='Features' />
      <h2 className='text-12 md:text-3xl font-medium text-white text-center'>
        Everything You Need to Create Winning Ads
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full px-4 mt-6'>
        <div className='flex flex-col gap-4 p-4 items-center  rounded-lg shadow-lg'>
          <div className='p-3 feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center rounded-lg shadow-lg'>
          <div className='p-3 feature-card feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center  rounded-lg shadow-lg'>
          <div className='p-3 feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center  rounded-lg shadow-lg'>
          <div className='p-3 feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center  rounded-lg shadow-lg'>
          <div className='p-3 feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center  rounded-lg shadow-lg'>
          <div className='p-3 feature-card-icon-bg rounded-full outline-[0.56px] flex items-center justify-center'>
            <LucideChartBarBig className='h-8 w-8 text-white' />
          </div>
          <h2 className='text-lg md:text-xl font-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='text-sm md:text-base text-gray-300 text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
      </div>
    </section>
  );
}
