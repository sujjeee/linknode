'use server'

import { env } from "@/env.mjs"
import { customAlphabet } from 'nanoid';
import { toast } from "sonner";

const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 10);

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
                key: shortUrlInfo.shortLink.length > 0 ? shortUrlInfo.shortLink : nanoid(7),
                password: shortUrlInfo.password
            })
        };

        const response = await fetch(`https://api.dub.co/links?projectSlug=${env.DUB_DOT_CO_SLUG}`, options);

        switch (response.status) {
            case 409:
                throw new Error('Short link already exists.');
            case 429:
                throw new Error('Too many requests. Please try again later.');
            default:
                if (!response.ok) {
                    throw new Error('Something went wrong, please try again later.');
                }
        }

        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(`${error.message}`);
    }
}
