import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function DataLoading() {
    return (
        <div className="p-2 h-full w-full space-y-8  max-w-lg mx-auto overflow-y-scroll hide_scrollbar pt-12">
            <div className="flex flex-col gap-3 justify-center items-center">
                <Skeleton className="h-20 w-20 rounded-full" />
                <Skeleton className="h-[30px] w-[200px] rounded-2xl" />
                <Skeleton className="h-[50px] w-full rounded-2xl" />
            </div>
            <div className="flex items-center justify-center flex-wrap gap-3">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
            </div>
            <ul className="space-y-2">
                <Skeleton className="h-[50px] w-full rounded-2xl" />
                <Skeleton className="h-[50px] w-full rounded-2xl" />
                <Skeleton className="h-[50px] w-full rounded-2xl" />
                <Skeleton className="h-[50px] w-full rounded-2xl" />
            </ul>
        </div>
    )
}
