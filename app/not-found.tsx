import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ paddingTop: '5rem', background: 'var(--explr-bg)' }}
    >
      <Container className="max-w-lg text-center">
        <p
          className="font-black text-[#C96F4F] mb-4"
          style={{ fontSize: '6rem', lineHeight: 1, fontFamily: 'var(--font-display)', letterSpacing: '-0.05em' }}
        >
          404
        </p>
        <h1 className="mb-4 text-[2rem]" style={{ fontFamily: 'var(--font-display)' }}>
          Page not found
        </h1>
        <p className="text-[#5C6259] mb-8">
          This page doesn't exist — or has moved. Let's get you back somewhere useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary">Back to home</Button>
          <Button href="/work" variant="secondary">See our work</Button>
        </div>
      </Container>
    </div>
  );
}
