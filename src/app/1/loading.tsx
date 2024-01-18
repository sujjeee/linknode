import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function DataLoading() {
  return (
    <div className="hide_scrollbar mx-auto size-full max-w-lg  space-y-8 overflow-y-scroll p-2 pt-12">
      <div className="flex flex-col items-center justify-center gap-3">
        <Skeleton className="size-20 rounded-full" />
        <Skeleton className="h-[30px] w-[200px] rounded-2xl" />
        <Skeleton className="h-[50px] w-full rounded-2xl" />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="size-8 rounded-full" />
        <Skeleton className="size-8 rounded-full" />
      </div>
      <ul className="space-y-2">
        <Skeleton className="h-[50px] w-full rounded-2xl" />
        <Skeleton className="h-[50px] w-full rounded-2xl" />
        <Skeleton className="h-[50px] w-full rounded-2xl" />
        <Skeleton className="h-[50px] w-full rounded-2xl" />
      </ul>
    </div>
  );
}
