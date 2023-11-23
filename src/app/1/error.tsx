'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function LinkPageError() {
  return (
    <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%]">
      <div className="space-y-5 text-center">
        <h1 className="text-lg text-accent-foreground dark:text-gray-400 md:text-xl">
          Sorry, there is mistake in url.
        </h1>
        <Button asChild size={'sm'}>
          <Link href="/">Create new page</Link>
        </Button>
      </div>
    </div>
  );
}
