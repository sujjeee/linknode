'use client';

import React from 'react';
import { Drawer } from 'vaul';
import useWindow from '@/hooks/use-window';
import { isEmptyValues } from '@/lib/utils';
import { Info, LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useData } from '@/lib/context/link-context';
import { useAPIResponse } from '@/lib/context/api-response-context';
import { DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import CreateShortlinkForm from '@/components/forms/create-shortlink-form';
import DeleteShortlinkForm from '@/components/forms/delete-shortlink-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ShortenerButton() {
  const { isDesktop } = useWindow();
  const { data } = useData();
  const isEmpty = isEmptyValues(data);
  const { shortedLink, isOpen, setOpen } = useAPIResponse();

  const handleInfoClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <>
      {isDesktop ? (
        <Dialog open={isOpen} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">
              <LinkIcon className="mr-2 size-4" />
              Shortener
            </Button>
          </DialogTrigger>
          <DialogContent
            className="overflow-hidden p-0 sm:max-w-[450px]"
            showClose={false}
          >
            <CardHeader className="p-6  pb-0">
              <CardTitle className="flex select-none items-center justify-between text-xl">
                Powered by Dub.co
                <Info
                  onClick={() => handleInfoClick('https://dub.co/')}
                  className="size-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95"
                />
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
              ) : shortedLink ? (
                <DeleteShortlinkForm />
              ) : (
                <CreateShortlinkForm />
              )}
            </CardContent>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer.Root>
          <DrawerTrigger asChild>
            <Button className="w-full">
              <LinkIcon className="mr-2 size-4" />
              Shortener
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-max p-6">
            <CardHeader className="p-0 pb-4 pt-1">
              <CardTitle className="flex select-none items-center justify-between p-0 text-lg">
                Powered by Dub.co
                <Info
                  onClick={() => handleInfoClick('https://dub.co/')}
                  className="size-4 cursor-pointer text-muted-foreground hover:text-accent-foreground active:scale-95"
                />
              </CardTitle>
              <CardDescription>
                Shorten your link with dub.co and get full control over it.
              </CardDescription>
            </CardHeader>
            {isEmpty ? (
              <Button className="w-full">
                Can&#39;t short link with empty fields!
              </Button>
            ) : shortedLink ? (
              <DeleteShortlinkForm />
            ) : (
              <CreateShortlinkForm />
            )}
          </DrawerContent>
        </Drawer.Root>
      )}
    </>
  );
}
