'use client';

import React from 'react';
import { isEmptyValues } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useData } from '@/lib/context/LinkContext';
import { LinkIcon } from 'lucide-react';
import ShortLinkForm from '@/components/forms/ShortLinkForm';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function ShortenerButton() {
  const { data } = useData();
  const isEmpty = isEmptyValues(data);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpenChange = (newIsOpen: React.SetStateAction<boolean>) => {
    setIsOpen(newIsOpen);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">
          <LinkIcon className="mr-2 h-4 w-4" />
          Shortener
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]" showClose={false}>
        <CardHeader className="p-0">
          <CardTitle className="text-xl">Powered by Dub.co</CardTitle>
          <CardDescription>
            Shorten your link with dub.co and get full control over it.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 p-0">
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
