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


interface OtherLinksDetailsProps {

}

const OtherLinksDetails: FC<OtherLinksDetailsProps> = ({ }) => {
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Extra Links</CardTitle>
                <CardDescription>
                    Enter you additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Label htmlFor="icon-key">Icon Key</Label>
                        <Input id="icon-key" type="text" placeholder="ri:4k-fill" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="link-name">Lable</Label>
                        <Input id="link-name" type="text" placeholder="Amazon" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="link-url">Destination URL</Label>
                    <Input id="link-url" type="url" placeholder="http://example.com" />
                </div>
            </CardContent>
        </Card>
    )
}

export default OtherLinksDetails