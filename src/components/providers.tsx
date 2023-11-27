'use client';

import React from 'react';
import { DataProvider } from '@/lib/context/LinkContext';
import { Toaster } from '@/components/ui/toaster';
import { ShortLinkProvider } from '@/lib/context/ShortLinkContext';
import { APIResponseProvider } from '@/lib/context/APIResponseContext';

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
