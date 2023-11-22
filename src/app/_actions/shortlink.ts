'use server'

import { env } from "@/env.mjs"
import { generateNanoId } from "@/lib/utils";

export default async function createShortLink(shortUrlInfo: CreateShortLink) {
    try {
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${env.DUB_DOT_CO_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                domain: env.NEXT_PUBLIC_BASE_SHORT_DOMAIN,
                url: shortUrlInfo.url,
                key: shortUrlInfo.shortLink.length > 0 ? shortUrlInfo.shortLink : generateNanoId(),
                password: shortUrlInfo.password
            })
        };

        const response = await fetch(`https://api.dub.co/links?projectSlug=${env.DUB_DOT_CO_SLUG}`, options);

        switch (response.status) {
            case 409:
                return {
                    success: false,
                    error: 'Short link already exists.',
                    data: null
                };
            case 429:
                return {
                    success: false,
                    error: 'Too many requests. Please try again later.',
                    data: null
                };
            default:
                if (!response.ok) {
                    return {
                        success: false,
                        error: 'Something went wrong, please try again later.',
                        data: null
                    };
                }
        }

        const data = await response.json();
        return {
            success: true,
            error: null,
            data: data
        };

    } catch (error: any) {
        throw new Error(`${error.message}`);
    }
}
