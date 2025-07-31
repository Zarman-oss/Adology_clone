import {
  LucideChartArea,
  LucideChartBar,
  LucideChartBarBig,
} from 'lucide-react';
import PrimaryButton from './ui/PrimaryButton';

export default function ProblemSolution() {
  return (
    <section className='mt-24 flex flex-col items-center gap-8 mx-auto px-4'>
      <PrimaryButton text='Problem' />
      <article className='flex flex-col items-center'>
        <h2 className='heading-3-medium capitalize text-white text-center'>
          How It Works: The AI Workflow
        </h2>
        <p className='heading-4-regular text-white text-center'>
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
      <article className='flex flex-col items-center'>
        <h2 className='heading-3-medium capitalize text-white max-w-3xl text-center'>
          Get Days of Research in Minutes. Adology’s AI analyzes and labels your
          creative data instantly, uncovering insights that typically take
          weeks.
        </h2>
        <ul className='heading-4-regular text-white list-disc text-center'>
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
      {/* Feature section */}
      <PrimaryButton text='Features' />
      <h2 className='heading-3-medium text-white text-center'>
        Everything You Need to Create Winning Ads
      </h2>
      {/* Feature cards */}
      {/* feature container */}
      <div className='max-w-[800px] mx-auto w-full flex flex-wrap items-center justify-center gap-4 px-4'>
        {/* Card */}
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
        <div className='flex flex-col gap-4 p-4 items-center max-w-[370px] sm:max-w-[300px] md:max-w-[350px]'>
          <div className='p-3 feature-card-icon-bg rounded-[55.56px] outline-[0.56px] flex items-center gap-1'>
            <div className='w-8 h-8 relative overflow-hidden'>
              <LucideChartBarBig className='h-8 w-8' color='white' />
            </div>
          </div>
          <h2 className='heading-5-medium text-white text-center'>
            AI-Enhanced Reporting
          </h2>
          <p className='body-1-regular text-grey text-center'>
            Extract insights from 300+ creative attributes, including tone,
            messaging, and visual style
          </p>
        </div>
      </div>
    </section>
  );
}
