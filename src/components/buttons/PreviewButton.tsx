"use client"

import React, { FC } from 'react'
import { Button } from "@/components/ui/button"
import { Drawer } from "vaul"
import { DrawerContent, DrawerTrigger } from "@/components/ui/drawer"
import DisplayData from "@/components/DisplayData"
import { useData } from '@/lib/context/LinkContext'

interface PreviewButtonProps { }

const PreviewButton: FC<PreviewButtonProps> = () => {
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
        <div className="fixed inset-x-0 bottom-0 p-4 z-10 flex justify-center items-center backdrop-blur-sm ">
            <Drawer.Root>
                <DrawerTrigger asChild>
                    <Button className="rounded-full max-w-[350px] w-full tracking-wide overflow-y-auto" >
                        Preview page
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[75%] px-2 pt-10 pb-2">
                    {
                        isEmpty
                            ? <div className='w-full text-sm text-muted-foreground h-[90%] flex justify-center items-center'>Nothing to show...</div>
                            : <DisplayData acc={data} />
                    }
                </DrawerContent>
            </Drawer.Root>
        </div>
    )
}

export default PreviewButton