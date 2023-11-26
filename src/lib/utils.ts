import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { customAlphabet } from 'nanoid';
import { encode, decode } from 'js-base64';
import { toast } from 'sonner';
import type { DataProps, ShortLinkProps } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const encodeData = (obj: DataProps): string => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64: string) => {
  try {
    const decodedString = decode(base64);
    return JSON.parse(decodedString) as DataProps;
  } catch (error) {
    return null;
  }
};

export function catchError(err: unknown) {
  if (err instanceof Error) {
    return toast.error(err.message);
  } else {
    return toast.error('Something went wrong, please try again later.');
  }
}

export function generateNanoId() {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, 10);
  return nanoid(7);
}

export function isEmptyValues(obj: DataProps): boolean {
  if (!obj) {
    return true;
  }

  type Keys = keyof DataProps;

  for (const key of Object.keys(obj) as Keys[]) {
    if (obj[key] !== '' && obj[key].length !== 0) {
      return false;
    }
  }

  return true;
}

export function checkCustomCredentials(shortUrlInfo: ShortLinkProps) {
  const { authorization, projectSlug, domain } = shortUrlInfo;
  return Boolean(!authorization && !projectSlug && !domain);
}

export function checkValidCustomCredentials(shortUrlInfo: ShortLinkProps) {
  const { authorization, projectSlug, domain } = shortUrlInfo;

  if (authorization && projectSlug && domain) {
    return true;
  }

  if (!authorization && !projectSlug && !domain) {
    return true;
  }

  return false;
}
