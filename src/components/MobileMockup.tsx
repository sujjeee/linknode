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
        <div className="relative mx-auto border-primary bg-primary border-[14px] rounded-[2.5rem] min-w-[350px] h-[700px] w-[350px] shadow-xl -z-50">
            <div className="w-[148px] h-[18px] bg-primary top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-50"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[124px] rounded-l-lg z-50"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[178px] rounded-l-lg z-50"></div>
            <div className="h-[64px] w-[4px] bg-primary absolute -right-[17px] top-[142px] rounded-r-lg z-50"></div>
            <div className="relative rounded-[2rem] overflow-hidden w-full h-full break-words ">
                <div className=" h-full overflow-y-scroll hide_scrollbar ">
                    <div className="absolute inset-0  h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
                    {
                        isEmpty
                            ? <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full text-sm text-muted-foreground  flex justify-center items-center'>Nothing to show...</div>
                            : (
                                <div className='pt-10 px-2 flex justify-center items-center  '>
                                    <DisplayData acc={data} />
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
})

// added display due to eslint error
MobileMockup.displayName = "MobileMockup"
export default MobileMockup