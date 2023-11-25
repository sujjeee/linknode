'use client';

import * as React from 'react';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input, type InputProps } from '@/components/ui/input';
import { useShortener } from '@/lib/context/ShortLinkContext';

interface AuthorizationInputProps extends InputProps {
  onShortlinkChange?: (shortlink: string) => void;
}

const AuthorizationInput = React.forwardRef<
  HTMLInputElement,
  AuthorizationInputProps
>(({ className, ...props }, ref) => {
  const { setShortUrlInfo } = useShortener();

  return (
    <div className="relative">
      <Input className={cn('pr-10', className)} ref={ref} {...props} />
      <div className="absolute right-0 top-2/4 flex translate-y-[-50%] items-center justify-center px-3">
        {props.value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="px-0 text-red-600 opacity-50 hover:bg-transparent hover:text-destructive hover:opacity-100 active:scale-95"
            onClick={() => {
              setShortUrlInfo((prevState) => ({
                ...prevState,
                authorization: null,
              }));
            }}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />

            <span className="sr-only">delete</span>
          </Button>
        )}
      </div>
    </div>
  );
});

AuthorizationInput.displayName = 'AuthorizationInput';

export { AuthorizationInput };
