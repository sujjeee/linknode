import React from 'react';
import { Icon } from '@iconify/react';

interface ExtraLinksCardProps {
  label: string;
  url: string;
  icon?: string;
}

export default function ExtraLinksCard({
  label,
  url,
  icon,
}: ExtraLinksCardProps) {
  return (
    <li>
      {label && url && (
        <a href={url} target="_blank">
          <dt className="-m-1 flex items-center space-x-2 rounded-xl bg-slate-50 p-1 shadow-sm hover:bg-slate-100">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-500">
              {icon ? (
                <Icon icon={icon} className="h-5 w-5" />
              ) : (
                <Icon icon="ph:link-simple" className="h-5 w-5" />
              )}
            </div>
            <div className="w-full min-w-0 grow">
              <p className="text-sm font-medium leading-6 text-accent-foreground">
                {label}
              </p>
            </div>
          </dt>
        </a>
      )}
    </li>
  );
}
