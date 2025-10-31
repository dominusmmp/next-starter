import { blur64NextImageData } from 'blur64/nextjs';
import Image from 'next/image';
import { use } from 'react';

export default function Home() {
  const image = use(
    blur64NextImageData('https://images.unsplash.com/photo-1761232007605-d5e203c53e14?auto=format&fit=crop&q=80&w=1920')
  );

  return (
    <main className="prose prose-gray dark:prose-invert flex min-h-dvh w-full max-w-dvw flex-col items-center justify-center p-4 text-center">
      <Image
        src="https://images.unsplash.com/photo-1761232007605-d5e203c53e14?auto=format&fit=crop&q=80&w=1920"
        alt="A beautiful landscape?!"
        {...image}
        className="pointer-events-none fixed inset-0 size-full self-stretch justify-self-stretch object-fill select-none"
      />

      <div className="bg-background relative flex min-h-40 w-full max-w-xs items-center justify-center rounded-3xl border border-gray-200 shadow-2xl shadow-slate-950 dark:border-gray-800">
        <h2 className="my-0!">Hello world!</h2>
      </div>
    </main>
  );
}
