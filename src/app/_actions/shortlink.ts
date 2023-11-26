'use server';

import { env } from '@/env.mjs';
import { catchError, generateNanoId } from '@/lib/utils';
import type { APIResponse, ShortLinkProps } from '@/types';

export default async function createShortLink(shortUrlInfo: ShortLinkProps) {
  try {
    const authorization = shortUrlInfo.authorization || env.DUB_DOT_CO_TOKEN;
    const projectSlug = shortUrlInfo.projectSlug || env.DUB_DOT_CO_SLUG;
    const domain = shortUrlInfo.domain || env.NEXT_PUBLIC_BASE_SHORT_DOMAIN;
    const shortLink = shortUrlInfo.shortLink || generateNanoId();

    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authorization}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        domain: domain,
        url: shortUrlInfo.url,
        key: shortLink,
        password: shortUrlInfo.password,
        rewrite: shortUrlInfo.rewrite, //(DEV)NOTE: rewrite gives 'Internal server error' as local host link can't be cloaked
      }),
      cache: 'no-store' as RequestCache,
    };

    const response = await fetch(
      `https://api.dub.co/links?projectSlug=${projectSlug}`,
      options,
    );

    switch (response.status) {
      case 401:
      case 404:
      case 403:
        return {
          success: false,
          error: 'Unauthorized or invalid credentails.',
          data: null,
        };
      case 409:
        return {
          success: false,
          error: 'Short link already exists.',
          data: null,
        };
      case 429:
        return {
          success: false,
          error: 'Too many requests. Please try again later.',
          data: null,
        };
      default:
        if (!response.ok) {
          return {
            success: false,
            error: `Error: ${response.statusText}`,
            data: null,
          };
        }
    }

    const data = (await response.json()) as APIResponse;

    return {
      success: true,
      error: null,
      data: data,
    };
  } catch (error) {
    catchError(error);
  }
}
