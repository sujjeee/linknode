'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { useData } from '@/lib/context/link-context';

export default function DemoButton() {
  const { showDemo } = useData();
  return (
    <Button className="w-full" onClick={showDemo}>
      <Play className="mr-2 h-4 w-4" />
      Demo
    </Button>
  );
}
