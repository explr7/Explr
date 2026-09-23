import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
  dark?: boolean;
}

export function Section({ children, className, id, labelledBy, dark }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('section-py', dark && 'section-dark', className)}
    >
      {children}
    </section>
  );
}
