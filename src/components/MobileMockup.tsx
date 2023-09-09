"use client"

import React from 'react'
import DisplayData from '@/components/DisplayData'
import { useData } from '@/lib/context/LinkContext';
import { BACKGROUND_OPTIONS } from '@/components/background/BgSnippets';
import { cn } from '@/lib/utils';

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

    const selectedBgOption = data
        ? BACKGROUND_OPTIONS.find((option) => option.code === data.bg)
        : null;

    const selectedBgComponent = selectedBgOption ? selectedBgOption.component : null;

    return (
        <div className="relative mx-auto border-primary bg-primary border-[14px] rounded-[42px] min-w-[350px] h-[700px] w-[350px] shadow-xl z-50 ">
            <div className="w-[148px] h-[18px] bg-primary top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-50"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[124px] rounded-l-lg z-50"></div>
            <div className="h-[46px] w-[4px] bg-primary absolute -left-[17px] top-[178px] rounded-l-lg z-50"></div>
            <div className="h-[64px] w-[4px] bg-primary absolute -right-[17px] top-[142px] rounded-r-lg z-50"></div>
            <div className={cn(
                "relative rounded-[32px] overflow-hidden w-full h-full break-words",
                { "bg-white": !data.bg }
            )}>
                {
                    isEmpty
                        ? <div className='bg-white w-full text-sm text-muted-foreground h-full flex justify-center items-center z-20'>Nothing to show...</div>
                        : (
                            <>
                                {!isEmpty && selectedBgComponent}
                                <div className='h-full pt-10 px-2'>
                                    <DisplayData acc={data} />
                                </div>
                            </>
                        )
                }
            </div>
        </div>
    )
})

// added display due to eslint error
MobileMockup.displayName = "MobileMockup"
export default MobileMockup
