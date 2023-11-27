'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { ImageIcon } from 'lucide-react';
import type { DisplayDataProps } from '@/types';
import ExtraLinksCard from '@/components/extra-links-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function DisplayData({ acc }: DisplayDataProps) {
  const allSocialLinksAreEmpty =
    !acc.f &&
    !acc.t &&
    !acc.ig &&
    !acc.tg &&
    !acc.w &&
    !acc.y &&
    !acc.e &&
    !acc.gh &&
    !acc.l;

  const iconMap: Record<string, string> = {
    f: 'ph:facebook-logo-duotone',
    t: 'ph:twitter-logo-duotone',
    ig: 'ph:instagram-logo-duotone',
    tg: 'ph:telegram-logo-duotone',
    w: 'ph:whatsapp-logo-duotone',
    y: 'ph:youtube-logo-duotone',
    e: 'ph:envelope-duotone',
    gh: 'ph:github-logo-duotone',
    l: 'ph:linkedin-logo-duotone',
  };

  return (
    <div className="hide_scrollbar mx-auto h-full w-full max-w-lg space-y-8 overflow-y-scroll p-2">
      <div className="z-50 text-center">
        {acc.i && (
          <Avatar className="mx-auto h-20 w-20 overflow-hidden rounded-full ring ring-slate-200">
            <AvatarImage
              src={acc.i}
              alt={`${acc.n}'s profile picture`}
              className="h-full w-full object-cover"
            />
            <AvatarFallback>
              <ImageIcon className="h-8 w-8 text-gray-300" />
            </AvatarFallback>
          </Avatar>
        )}
        {acc.n && (
          <h1 className="mt-4 text-2xl font-bold text-slate-800">{acc.n}</h1>
        )}
        {acc.d && <p className="mt-2 text-sm text-slate-600">{acc.d}</p>}
      </div>
      {!allSocialLinksAreEmpty && (
        <div className="flex flex-wrap items-center justify-center">
          {Object.entries(acc).map(
            ([key, value]: [string, string | undefined]) => {
              const excludedKeys = ['i', 'n', 'd', 'bg'];

              if (key !== 'ls' && value && !excludedKeys.includes(key)) {
                const propIcon = iconMap[key];
                if (key === 'e') {
                  // Handle email link generation
                  return (
                    <span className="p-1" key={key}>
                      <a href={`mailto:${value}`}>
                        <Icon icon={propIcon} className="h-6 w-6" />
                      </a>
                    </span>
                  );
                } else if (key === 'w') {
                  // Handle WhatsApp link generation
                  const whatsappValue: string = value.startsWith(
                    'https://wa.me/',
                  )
                    ? value // If it already starts with the correct prefix
                    : `https://wa.me/${value}`;

                  return (
                    <span className="p-1" key={key}>
                      <a
                        href={whatsappValue}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon icon={propIcon} className="h-6 w-6" />
                      </a>
                    </span>
                  );
                } else {
                  return (
                    <span className="p-1" key={key}>
                      <a href={value} target="_blank" rel="noopener noreferrer">
                        <Icon icon={propIcon} className="h-6 w-6" />
                      </a>
                    </span>
                  );
                }
              }
              return null;
            },
          )}
        </div>
      )}
      <ul className="space-y-2">
        {acc.ls &&
          acc.ls.map((link, id) => (
            <ExtraLinksCard
              label={link.l}
              icon={link.i}
              url={link.u}
              key={id}
            />
          ))}
      </ul>
    </div>
  );
}
