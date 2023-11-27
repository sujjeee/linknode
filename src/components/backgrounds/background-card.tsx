import React from 'react';
import { Button } from '@/components/ui/button';
import { useData } from '@/lib/context/link-context';
import { BACKGROUND_OPTIONS } from '@/components/backgrounds/background-snippets';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const BackgroundCard: React.FC = () => {
  const { data, selectBackground } = useData();
  return (
    <ScrollArea>
      <div className="flex space-x-4 pb-4">
        {BACKGROUND_OPTIONS.map((background, index) => {
          return (
            <Button
              key={index}
              variant={'outline'}
              className={cn(
                'relative min-h-[60px] min-w-[150px] overflow-hidden text-muted-foreground',
                {
                  'bg-accent text-accent-foreground':
                    data.bg === background.code,
                },
              )}
              onClick={() => {
                selectBackground(background.code);
              }}
            >
              {background.name}
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default BackgroundCard;
