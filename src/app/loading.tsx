import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function SiteLoading() {
    return (
        <main className='relative grid lg:grid-cols-3 h-screen px-2 lg:px-0 md:container'>
            <section className='lg:col-span-2 flex flex-col items-center justify-center py-6 lg:px-20 gap-6 h-screen '>
                <div className='overflow-y-auto w-full hide_scrollbar flex flex-col gap-5 pb-20 lg:pb-0 '>
                    <Skeleton className="h-[250px] w-full rounded-2xl" />
                    <Skeleton className="h-[250px] w-full rounded-2xl" />
                    <Skeleton className="h-[250px] w-full rounded-2xl" />
                </div>
            </section>
            <section className='hidden lg:flex pl-6 items-center'>
                <Skeleton className="h-[700px] w-[350px] rounded-2xl" />
            </section>
        </main>
    )
}
