export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We spend the first week listening — stakeholder interviews, audience research, competitive audit. No assumptions, only evidence.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'Strategy doc, creative brief, and a single clear goal. Everything we build from here points back to this document.',
  },
  {
    number: '03',
    title: 'Create',
    description:
      'Design and copy developed together, not in sequence. Two-week sprint cycles with async review so nothing stalls.',
  },
  {
    number: '04',
    title: 'Launch & Evolve',
    description:
      'We ship, measure, and iterate. A 30-day post-launch window means you never go live and disappear into the void alone.',
  },
];
