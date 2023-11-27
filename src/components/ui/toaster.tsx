'use client';

import useWindow from '@/hooks/use-window';
import { Toaster as RadToaster } from 'sonner';

export function Toaster() {
  const { isMobile } = useWindow();
  return (
    <RadToaster
      position={isMobile ? 'top-center' : 'bottom-right'}
      richColors
    />
  );
}
