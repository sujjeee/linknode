'use client';

import React from 'react';
import { DataProvider } from '@/lib/context/LinkContext';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      {children}
      <Toaster />
    </DataProvider>
  );
}
