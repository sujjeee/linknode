'use client'

import React from 'react'
import { notFound, useSearchParams } from 'next/navigation'
import DisplayData from '@/components/DisplayData'
import { decodeData } from '@/lib/utils'
import DataLoading from './loading'
import { BACKGROUND_OPTIONS } from '@/components/background/BgSnippets'

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

    // Find the matching background component based on the background code
    const selectedBgOption = decodedData
        ? BACKGROUND_OPTIONS.find((option) => option.code === decodedData.bg)
        : null;

    const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;


    return (
        <>
            <div className="fixed left-0 top-0 -z-10 h-full w-full">
                {selectedBgComponent}
            </div>
            <div className='p-2 pt-10 hide_scrollbar'>
                {decodedData ? (
                    <DisplayData acc={decodedData} />
                ) : (
                    <DataLoading />
                )}
            </div>
        </>
    );
}
