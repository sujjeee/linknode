import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function SiteLoading() {
  return (
    <main className="relative grid h-screen px-2 md:container lg:grid-cols-3 lg:px-0">
      <section className="flex h-screen flex-col items-center justify-center gap-6 py-6 lg:col-span-2 lg:px-20 ">
        <div className="hide_scrollbar flex w-full flex-col gap-5 overflow-y-auto pb-20 lg:pb-0 ">
          <Skeleton className="h-[250px] w-full rounded-2xl" />
          <Skeleton className="h-[250px] w-full rounded-2xl" />
          <Skeleton className="h-[250px] w-full rounded-2xl" />
        </div>
      </section>
      <section className="hidden items-center pl-6 lg:flex">
        <Skeleton className="h-[700px] w-[350px] rounded-2xl" />
      </section>
    </main>
  );
}
