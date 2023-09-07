"use client"

import React from 'react'
import DisplayData from './DisplayData'
import { useData } from '@/lib/context/LinkContext';

interface Acc {
    i?: string;
    n?: string;
    d?: string;
    f?: string;
    t?: string;
    ig?: string;
    m?: string;
    tg?: string;
    w?: string;
    y?: string;
    e?: string;
    gh?: string;
    l?: string;
    ls: AdditionalLinkProps[];
}

interface MobileMockupProps { }

const MobileMockup: React.FC<MobileMockupProps> = React.memo(() => {
    const { data } = useData();

    const [isEmpty, setIsEmpty] = React.useState<boolean>(false)

    React.useEffect(() => {
        function isEmptyValues(obj: any) {
            for (let key in obj) {
                if (obj[key] !== "" && obj[key].length !== 0) {
                    return false;
                }
            }
            return true;
        }
        setIsEmpty(isEmptyValues(data))
    }, [data])

    return (
        <div className="relative mx-auto border-primary bg-primary border-[14px] rounded-[2.5rem] min-w-[350px] h-[700px] w-[350px] shadow-xl">
            <div className="w-[148px] h-[18px] bg-primary top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[4px] bg-primary absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full break-words">
                <div className="bg-white h-full overflow-y-scroll hide_scrollbar pt-10 px-2">
                    {
                        isEmpty
                            ? <div className='w-full text-sm text-muted-foreground h-[90%] flex justify-center items-center'>Nothing to show...</div>
                            : <DisplayData acc={data} />
                    }
                </div>
            </div>
        </div>
    )
})

// added display due to eslint error
MobileMockup.displayName = "MobileMockup"
export default MobileMockup