'use client'

import React from 'react'
import { notFound, useSearchParams } from 'next/navigation'
import DisplayData from '@/components/DisplayData'
import { decodeData } from '@/lib/utils'
import DataLoading from './loading'
// import { Metadata } from 'next'

// TODO: add dynamic metadata 👇
// export const metadata: Metadata = {
//     title: `${}'s Links`,
//     description: `find ${}'s links, all in one place.`,
// }

export default function Links() {
    const searchParams = useSearchParams()
    const acc = searchParams.get('data')

    if (!acc) {
        notFound();
    }
    const [decodedData, setDecodedData] = React.useState<Acc | null>(null);

    React.useEffect(() => {
        if (acc) {
            const decoded = decodeData(acc);
            setDecodedData(decoded);
        }
    }, [acc]);

    return (
        <div className='p-2 pt-10 hide_scrollbar'>
            {decodedData ? (
                <DisplayData acc={decodedData} />
            ) : (
                <DataLoading />
            )}
        </div>
    );
}
