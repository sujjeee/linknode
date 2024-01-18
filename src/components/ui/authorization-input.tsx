'use client';

import * as React from 'react';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input, type InputProps } from '@/components/ui/input';
import { useShortener } from '@/lib/context/shortlink-context';

interface AuthorizationInputProps extends InputProps {
  onGlobalChange: (name: string, value?: string) => void;
}

const AuthorizationInput = React.forwardRef<
  HTMLInputElement,
  AuthorizationInputProps
>(({ className, onGlobalChange, ...props }, ref) => {
  const { shortUrlInfo, setShortUrlInfo } = useShortener();

  const [deleteAuthKey, setDeleteAuthKey] = React.useState<boolean | null>(
    null,
  );

  React.useEffect(() => {
    onGlobalChange('authorization', shortUrlInfo.authorization);
    setDeleteAuthKey(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteAuthKey]);

  return (
    <div className="relative">
      <Input ref={ref} className={cn('pr-10', className)} {...props} />
      <div className="absolute right-0 top-2/4 flex translate-y-[-50%] items-center justify-center px-3">
        {props.value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="px-0 text-red-600 opacity-50 hover:bg-transparent hover:text-destructive hover:opacity-100 active:scale-95"
            onClick={() => {
              setDeleteAuthKey(true);
              setShortUrlInfo((prevState) => ({
                ...prevState,
                authorization: '',
              }));
            }}
          >
            <Trash2 className="size-4" aria-hidden="true" />
            <span className="sr-only">delete</span>
          </Button>
        )}
      </div>
    </div>
  );
});

AuthorizationInput.displayName = 'AuthorizationInput';

export { AuthorizationInput };
