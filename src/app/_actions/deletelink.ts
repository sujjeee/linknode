'use server'

import { env } from "@/env.mjs"

export default async function deleteLink(someResponseInfo: any) {
    try {

        const options = {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${env.DUB_DOT_CO_TOKEN}`,
            }
        };

        const response = await fetch(`https://api.dub.co/links/${someResponseInfo.id}?projectSlug=${env.DUB_DOT_CO_SLUG}`, options);

        switch (response.status) {
            case 404:
                return {
                    success: false,
                    error: 'Short Link not found.'
                };
            case 429:
                return {
                    success: false,
                    error: 'Too many requests. Please try again later.'
                };
            default:
                if (!response.ok) {
                    return {
                        success: false,
                        error: 'Something went wrong, please try again later.'
                    };
                }
        }

        return {
            success: true,
            error: null
        };

    } catch (error) {
        throw new Error(`${error}`);
    }
}
