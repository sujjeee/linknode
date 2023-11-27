'use client';

import React from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { encodeData, isEmptyValues } from '@/lib/utils';
import { useData } from '@/lib/context/link-context';
import { Check, Copy, Send, Share2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function PublishButton() {
  const { data } = useData();
  const isEmpty = isEmptyValues(data);
  const [inputLink, setInputLink] = React.useState<string>('');
  const [hasCopied, setHasCopied] = React.useState<boolean>(false);

  const copyToClipboard = React.useCallback(async () => {
    try {
      const url = `${window.location.origin}/1?data=${encodeData(data)}`;
      await navigator.clipboard.writeText(url);
      return url;
    } catch (error) {
      toast.error('Failed to copy to clipboard');
      return null;
    }
  }, [data]);

  React.useEffect(() => {
    setHasCopied(false);
  }, [data]);

  async function publish() {
    if (!isEmpty) {
      const getUrl = await copyToClipboard();
      if (!getUrl) return null;
      setInputLink(getUrl);
      return true;
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" onClick={publish}>
          <Send className="mr-2 h-4 w-4" />
          Publish
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            Share your page
          </DialogTitle>
          <DialogDescription className="text-left">
            You can share your page with others and make it accessible from
            anywhere.
          </DialogDescription>
        </DialogHeader>
        {!isEmpty ? (
          <>
            <Input type="text" value={inputLink} readOnly autoFocus={false} />
            <DialogFooter>
              <div className="flex w-full items-center justify-between gap-3">
                <Button
                  className="w-full"
                  onClick={async () => {
                    try {
                      const inputLink = `${
                        window.location.origin
                      }/1?data=${encodeData(data)}`;
                      await navigator.share({
                        title: `${data.n} - LinkNode`,
                        text: `Find all of ${data.n}'s links in one place.`,
                        url: inputLink,
                      });
                    } catch (error) {
                      toast.error('Failed to share. Please try again later.');
                    }
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button
                  className="w-full"
                  onClick={async () => {
                    await copyToClipboard();
                    setHasCopied(true);
                  }}
                >
                  {hasCopied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
            </DialogFooter>
          </>
        ) : (
          <DialogClose>
            <Button className="w-full">
              Can&#39;t publish with empty fields!
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
