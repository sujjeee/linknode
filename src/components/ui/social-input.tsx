import * as React from 'react';

import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
}

const SocialInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon: propIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <Icon
          icon={propIcon}
          className="absolute left-2.5 top-2/4 h-5 w-5 translate-y-[-50%] "
        />
        <input
          type="search"
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
SocialInput.displayName = 'SocialInput';

export { SocialInput };
