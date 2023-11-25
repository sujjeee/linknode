'use client';

import React from 'react';
import { isEmptyValues } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useData } from '@/lib/context/LinkContext';
import { Info, LinkIcon, X } from 'lucide-react';
import ShortLinkForm from '@/components/forms/ShortLinkForm';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import useWindow from '@/hooks/useWindow';

export default function ShortenerButton() {
  const { isMobile } = useWindow();
  const { data } = useData();
  const isEmpty = isEmptyValues(data);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpenChange = (newIsOpen: React.SetStateAction<boolean>) => {
    setIsOpen(newIsOpen);
  };

  const handleInfoClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <LinkIcon className="mr-2 h-4 w-4" />
          Shortener
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-[450px] " showClose={false}>
        <CardHeader className="p-6  pb-0">
          <CardTitle className="flex select-none items-center justify-between text-xl">
            Powered by Dub.co
            {isMobile ? (
              <DialogClose>
                <X
                  onClick={() => DialogClose}
                  className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95"
                />
              </DialogClose>
            ) : (
              <Info
                onClick={() => handleInfoClick('https://dub.co/')}
                className="h-4 w-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95"
              />
            )}
          </CardTitle>
          <CardDescription>
            Shorten your link with dub.co and get full control over it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 p-6 pt-0">
          {isEmpty ? (
            <Button className="w-full">
              Can&#39;t short link with empty fields!
            </Button>
          ) : (
            <ShortLinkForm data={data} setIsOpen={handleIsOpenChange} />
          )}
        </CardContent>
      </DialogContent>
    </Dialog>
  );
}
