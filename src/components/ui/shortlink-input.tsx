'use client';

import * as React from 'react';
import { Shuffle, Trash2 } from 'lucide-react';
import { cn, generateNanoId } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input, type InputProps } from '@/components/ui/input';
import { useShortener } from '@/lib/context/shortlink-context';

interface ShortLinkInputProps extends InputProps {
  onGlobalChange: (name: string, value?: string) => void;
}
const ShortLinkInput = React.forwardRef<HTMLInputElement, ShortLinkInputProps>(
  ({ className, onGlobalChange, ...props }, ref) => {
    const [isNanoId, setIsNanoId] = React.useState(false);
    const { shortUrlInfo, setShortUrlInfo } = useShortener();

    React.useEffect(() => {
      onGlobalChange('shortLink', shortUrlInfo.shortLink);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shortUrlInfo.shortLink]);

    return (
      <div className="relative">
        <Input className={cn('pr-10', className)} ref={ref} {...props} />
        <div className="absolute  right-0 top-2/4 flex translate-y-[-50%] items-center justify-center gap-3 px-3">
          {isNanoId && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className=" px-0 text-red-600 opacity-50 hover:bg-transparent hover:text-destructive hover:opacity-100 active:scale-95"
              onClick={() => {
                setIsNanoId(false);
                setShortUrlInfo((prevState) => ({
                  ...prevState,
                  shortLink: '',
                }));
              }}
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">delete</span>
            </Button>
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="px-0 opacity-50 hover:bg-transparent hover:opacity-100 active:scale-95"
            onClick={() => {
              setIsNanoId(true);
              setShortUrlInfo((prevState) => ({
                ...prevState,
                shortLink: generateNanoId(),
              }));
            }}
          >
            <Shuffle className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">randomize</span>
          </Button>
        </div>
      </div>
    );
  },
);

ShortLinkInput.displayName = 'ShortLinkInput';

export { ShortLinkInput };
