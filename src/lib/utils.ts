import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { customAlphabet } from 'nanoid';


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { encode, decode } from 'js-base64';
import { toast } from "sonner";

export const encodeData = (obj: any): string => {
  return encode(JSON.stringify(obj));
};

export const decodeData = (base64: string): any => {
  return JSON.parse(decode(base64));
};

export function catchError(err: unknown) {
  if (err instanceof Error) {
    return toast.error(err.message)
  } else {
    return toast.error("Something went wrong, please try again later.")
  }
}

export function generateNanoId() {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  const nanoid = customAlphabet(alphabet, 10);
  return nanoid(7)
}
