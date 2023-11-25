'use client';

import React from 'react';
import { DataProvider } from '@/lib/context/LinkContext';
import { Toaster } from '@/components/ui/toaster';
import { ShortLinkProvider } from '@/lib/context/ShortLinkContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <ShortLinkProvider>{children}</ShortLinkProvider>
      <Toaster />
    </DataProvider>
  );
}
