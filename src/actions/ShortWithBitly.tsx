//  TODO: This code is not reliable and is intended for temporary use only.

'use server'

import { headers } from "next/headers";
import RateLimiter from "@/lib/RateLimiter";
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const rateLimiter = new RateLimiter(2, millisecondsPerDay);

export async function ShortWithBitly(props: string) {
    const ip = headers().get("x-forwarded-for")!;

    // ip for local development use only
    // const ip = '192.168.234.2'

    if (!ip) {
        throw Object.assign(new Error('IP address not found!'), { statusCode: 404 });
    }

    if (!rateLimiter.isAllowed(ip)) {
        throw new Error('Rate limit exceeded. Please try again later.');
    }

    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${process.env.BITLY_API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "long_url": `${props}`,
            "domain": "bit.ly",
            "group_guid": `${process.env.BITLY_GROUP_GUID}`
        })
    });

    if (response.status !== 200) {
        throw new Error(`${response.status}: ${response.statusText}`);
    }

    const data = await response.json()
    return data.link
}
