'use client';

import React from 'react';
import { DataProvider } from '@/lib/context/link-context';
import { Toaster } from '@/components/ui/toaster';
import { ShortLinkProvider } from '@/lib/context/shortlink-context';
import { APIResponseProvider } from '@/lib/context/api-response-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <ShortLinkProvider>
        <APIResponseProvider>{children}</APIResponseProvider>
      </ShortLinkProvider>
      <Toaster />
    </DataProvider>
  );
}
