import { Hero } from '@/components/sections/Hero';
import { ProofStrip } from '@/components/sections/ProofStrip';
import { Offerings } from '@/components/sections/Offerings';
import { WhyExplr } from '@/components/sections/WhyExplr';
import { WorkGrid } from '@/components/sections/WorkGrid';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { CTA } from '@/components/sections/CTA';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Offerings />
      <WhyExplr />
      <WorkGrid />
      <Process />
      <Team />
      <CTA />
    </>
  );
}
