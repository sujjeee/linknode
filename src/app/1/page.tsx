'use client'

import React, { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import DisplayData from '@/components/DisplayData'
import { decodeData } from '@/lib/utils'
// import { Metadata } from 'next'

// TODO: add dynamic metadata 👇
// export const metadata: Metadata = {
//     title: `${}'s Links`,
//     description: `find ${}'s links, all in one place.`,
// }

interface pageProps { }

const page: FC<pageProps> = ({ }) => {
    const searchParams = useSearchParams()
    const acc = searchParams.get('data')
    const [decodedData, setDecodedData] = React.useState<Acc | null>(null);

    React.useEffect(() => {
        if (acc) {
            const decoded = decodeData(acc);
            setDecodedData(decoded);
        }
    }, [acc]);

    return (
        <div className='p-2 pt-10'>
            {decodedData ? (
                <DisplayData acc={decodedData} />
            ) : (
                <div>Not found</div>
            )}
        </div>
    );
}

export default page 