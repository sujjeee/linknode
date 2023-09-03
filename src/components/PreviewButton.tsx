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
    return (
        <div className="fixed inset-x-0 bottom-0 p-4 z-10 flex justify-center items-center backdrop-blur-sm ">
            <Drawer.Root>
                <DrawerTrigger asChild>
                    <Button className="rounded-full max-w-[350px] w-full tracking-wide overflow-y-auto" >
                        Preview page
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="h-[75%] p-6 pt-10">
                    <DisplayData acc={data} />
                </DrawerContent>
            </Drawer.Root>
        </div>
    )
}

export default PreviewButton