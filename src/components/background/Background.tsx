"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import BgThemes from './BgThemes'

interface BackgroundProps { }

const Background: React.FC<BackgroundProps> = () => {

    return (
        <Card className='w-full -mt-5'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl flex justify-between items-center">
                    Background
                </CardTitle>
                <CardDescription>
                    Choose your backgound theme form here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <BgThemes />
            </CardContent>
        </Card>
    )
}

export default Background