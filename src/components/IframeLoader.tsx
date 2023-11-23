import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function IframeLoader() {
  return (
    <div className="hide_scrollbar mx-auto h-full w-full  max-w-lg space-y-8 overflow-y-scroll p-2">
      <div className="flex items-center  justify-between">
        <Skeleton className="h-[30px] w-[200px] rounded-2xl bg-muted-foreground" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-[30px] w-[30px] rounded-full bg-muted-foreground" />
          <Skeleton className="h-[30px] w-[30px] rounded-full bg-muted-foreground" />
        </div>
      </div>
      <ul className="space-y-2">
        <Skeleton className="h-[100px] w-full rounded-2xl bg-muted-foreground" />
        <Skeleton className="h-[100px] w-full rounded-2xl bg-muted-foreground" />
        <Skeleton className="h-[100px] w-full rounded-2xl bg-muted-foreground" />
      </ul>
    </div>
  );
}
