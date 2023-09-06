'use server'

export async function ShortWithBitly(props: string) {
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
