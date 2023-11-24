'use client';

import React from 'react';
import { env } from '@/env.mjs';
import { catchError, encodeData } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import deleteLink from '@/app/_actions/deletelink';
import { Check, Copy, Loader2, Trash2 } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { PasswordInput } from '@/components/ui/password-input';
import { ShortLinkInput } from '@/components/ui/shortlink-input';
import createShortLink from '@/app/_actions/shortlink';
import type { APIResponse, DataProps } from '@/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ShortLinkFormProps {
  data: DataProps;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShortLinkForm: React.FC<ShortLinkFormProps> = ({ data, setIsOpen }) => {
  const [shortUrlInfo, setShortUrlInfo] = React.useState({
    authorization: null,
    projectSlug: null,
    domain: null,
    rewrite: false,
    url: '',
    shortLink: '',
    password: '',
  });
  const [shortedLink, setShortedLink] = React.useState<string | null>(null);
  const [someResponseInfo, setSomeResponseInfo] =
    React.useState<APIResponse | null>(null);
  const [hasCopied, setHasCopied] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = `${window.location.origin}/1?data=${encodeData(data)}`;
    setShortUrlInfo((prevInfo) => ({
      ...prevInfo,
      url: url,
    }));
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShortUrlInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit() {
    try {
      setIsLoading(true);

      const response = await createShortLink(shortUrlInfo);

      if (!response) {
        toast.error('No response received');
        return;
      }

      if (response.error) {
        toast.error(response.error);
        return;
      }

      toast.success('Link created successfully!');

      setSomeResponseInfo(response.data);
      setShortedLink(
        `https://${env.NEXT_PUBLIC_BASE_SHORT_DOMAIN}/${response.data?.key}`,
      );
    } catch (error) {
      catchError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDelete() {
    try {
      setIsLoading(true);
      if (!someResponseInfo?.id) {
        toast.error('Invalid parameters');
        return;
      }

      const response = await deleteLink({
        id: someResponseInfo?.id,
        authorization: shortUrlInfo?.authorization ?? null,
        projectSlug: shortUrlInfo?.projectSlug ?? null,
      });

      if (!response) {
        toast.error('No response received');
        return;
      }

      if (response.error) {
        toast.error(response.error);
        return;
      }

      toast.success('Link deleted successfully!');

      setIsOpen(false);
    } catch (error) {
      catchError(error);
    } finally {
      setIsLoading(false);
      setShortedLink(null);
    }
  }

  const copyToClipboard = React.useCallback(async () => {
    if (!shortedLink) return null;
    try {
      await navigator.clipboard.writeText(shortedLink);
      setHasCopied(true);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
      return null;
    }
  }, [shortedLink]);

  const handleShortlinkChange = (shortlink: string) => {
    setShortUrlInfo((prevInfo) => ({
      ...prevInfo,
      shortLink: shortlink,
    }));
  };

  const handleLinkCloaking = (selectedValue: string) => {
    setShortUrlInfo((prevInfo) => ({
      ...prevInfo,
      rewrite: selectedValue === 'true',
    }));
  };

  return (
    <>
      {!shortedLink ? (
        <div className="grid gap-2">
          <div>
            <Label htmlFor="authorization" className="text-sm font-medium">
              Authorization key
            </Label>
            <Input
              name="authorization"
              type="text"
              className="select-none"
              placeholder="9dY7sFgT2Rb4EaZpL1oQxUwC"
              value={shortUrlInfo.authorization || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="projectSlug" className="text-sm font-medium">
              Project Slug
            </Label>
            <Input
              name="projectSlug"
              type="text"
              className="select-none"
              placeholder="api"
              value={shortUrlInfo.projectSlug || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="domain" className="text-sm font-medium">
              Custom Domain
            </Label>
            <Input
              name="domain"
              type="text"
              className="select-none"
              placeholder="url.codebustar.com"
              value={shortUrlInfo.domain || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="url" className="text-sm font-medium">
              Destination URL
            </Label>
            <Input
              name="url"
              type="text"
              className="select-none"
              placeholder="Paste your link here"
              value={shortUrlInfo.url}
              readOnly
            />
          </div>
          <div>
            <Label htmlFor="shortLink" className="text-sm font-medium">
              Short link
            </Label>
            <ShortLinkInput
              autoFocus
              type="text"
              name="shortLink"
              placeholder="mylinks"
              value={shortUrlInfo.shortLink}
              onChange={handleChange}
              onShortlinkChange={handleShortlinkChange}
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm font-medium">
              Password
            </Label>
            <PasswordInput
              name="password"
              placeholder="*****"
              value={shortUrlInfo.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label htmlFor="link_cloaking" className="text-sm font-medium">
              Link cloaking
            </Label>
            <Select
              defaultValue="false"
              onValueChange={(value) => handleLinkCloaking(value)}
            >
              <SelectTrigger id="link_cloaking">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">False</SelectItem>
                <SelectItem value="true">True</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            disabled={isLoading}
            onClick={handleSubmit}
            className="mt-2 w-full"
          >
            {isLoading ? (
              <>
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                Creating
              </>
            ) : (
              'Create short link'
            )}
          </Button>
        </div>
      ) : (
        <>
          <Input type="text" value={shortedLink} readOnly />
          <div className="flex w-full items-center justify-between gap-3">
            <Button
              disabled={isLoading}
              variant={'destructive'}
              className="w-full"
              onClick={handleDelete}
            >
              {isLoading ? (
                <>
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  Deleting
                </>
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </>
              )}
            </Button>
            <Button
              disabled={isLoading}
              className="w-full"
              onClick={copyToClipboard}
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
        </>
      )}
    </>
  );
};

export default ShortLinkForm;
