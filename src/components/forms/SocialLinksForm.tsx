"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Github } from 'lucide-react'
import { SocialInput } from '../ui/social-input'


interface SocialLinksFormProps {

}

const SocialLinksForm: FC<SocialLinksFormProps> = ({ }) => {
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Social Links</CardTitle>
                <CardDescription>
                    Enter your social media links here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
                <i className={`h-5 w-5 ri:alert-line`} />
                <SocialInput placeholder='facebook.com' />
                <SocialInput placeholder='facebook.com' />
                <SocialInput placeholder='facebook.com' />
                <SocialInput placeholder='facebook.com' />
            </CardContent>
        </Card>
    )
}

export default SocialLinksForm