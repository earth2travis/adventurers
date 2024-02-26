import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center">
        <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Adventurers
        </h1>
      </div>
      <div className="flex justify-center">
        <Link href="/start" className={buttonVariants({ variant: 'outline' })}>
          Create Character
        </Link>
      </div>
    </main>
  );
}
