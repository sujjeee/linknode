"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '../ui/textarea'


interface ProfileDetailsProps { }

const ProfileDetails: FC<ProfileDetailsProps> = ({ }) => {
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Profile Information</CardTitle>
                <CardDescription>
                    Enter your profile or title information here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" type="text" placeholder="John Doe" />
                    </div>
                    <div>
                        <Label htmlFor="Profile-url">Profile Url</Label>
                        <Input id="Profile-url" type="url" placeholder="https://example.com" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="description">About yourself</Label>
                    <Textarea id="description" placeholder='type something here...' />
                </div>
            </CardContent>
        </Card>
    )
}

export default ProfileDetails