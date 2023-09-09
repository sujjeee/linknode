"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import BackgroundCard from '@/components/background/BackgroundCard'

export default function Background() {
    return (
        <Card className='w-full -mt-5'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Background
                </CardTitle>
                <CardDescription>
                    Customize your background theme from here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 pb-2.5">
                <BackgroundCard />
            </CardContent>
        </Card>
    )
}
