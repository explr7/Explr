export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string; // Used for avatar placeholder
  accent: string;  // Background color for avatar
}

export const team: TeamMember[] = [
  {
    name: 'Sarvesh Yadav',
    role: 'Co-Founder & Web Lead',
    bio: 'Full-stack engineer building fast, high-converting websites, landing pages, and custom digital platforms with an obsessive bar for design and performance.',
    initials: 'SY',
    accent: '#2E3A2F',
  },
  {
    name: 'Rishabh Semwal',
    role: 'Co-Founder & Creative Lead',
    bio: 'Visual storyteller crafting high-retention social reels, YouTube videos, and dynamic motion graphics designed to captivate audiences and scale brands.',
    initials: 'RS',
    accent: '#C96F4F',
  },
];
