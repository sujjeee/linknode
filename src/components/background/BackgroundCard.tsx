import React from 'react';
import { Button } from '../ui/button';
import { useData } from '@/lib/context/LinkContext';
import { BACKGROUND_OPTIONS } from './BgSnippets';
import { cn } from '@/lib/utils';

type BackgroundCardProps = {};

const BackgroundCard: React.FC<BackgroundCardProps> = () => {
    const { data, selectBackground } = useData()
    return (
        <div className='flex gap-4 overflow-x-scroll hide_scrollbar' >
            {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                    <Button
                        key={index}
                        variant={"outline"}
                        className={cn("relative min-h-[60px] min-w-[150px] overflow-hidden text-muted-foreground", {
                            'bg-accent text-accent-foreground': data.bg === background.code
                        })}
                        onClick={() => {
                            selectBackground(background.code)
                        }}
                    >
                        {background.name}
                    </Button>
                );
            })}
        </div>
    );
};

export default BackgroundCard;