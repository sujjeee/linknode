'use client'

import React, { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import DisplayData from '@/components/DisplayData'
import { decodeData } from '@/lib/utils'

interface pageProps {

}

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
        <>
            {decodedData ? (
                <DisplayData acc={decodedData} />
            ) : (
                <div>Not found</div>
            )}
        </>
    );


}

export default page 