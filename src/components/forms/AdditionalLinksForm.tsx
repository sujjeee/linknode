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


interface AdditionalLinksFormProps {
    links: string[];
    onUpdate: (links: string[]) => void;
}

const AdditionalLinksForm: FC<AdditionalLinksFormProps> = ({ links, onUpdate }) => {
    const updateLink = (index: number, link: string) => {
        // Make a copy of the links array
        const newLinks = [...links];
        // Update the link at the given index
        newLinks[index] = link;
        // Call the onChange prop with the new links array
        onUpdate(newLinks);
    };


    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Extra Links</CardTitle>
                <CardDescription>
                    Enter you additional link details here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                {links.map((link, index) => {
                    return (
                        <>
                            <div className="grid grid-cols-2 gap-2">
                                <div>
                                    <Label htmlFor={`icon-key-${index}`}>Icon Key</Label>
                                    <Input
                                        id={`icon-key-${index}`}
                                        type="text"
                                        placeholder="ri:4k-fill"
                                        value={link}
                                        onChange={(e) => updateLink(index, e.target.value)}
                                    />
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
                        </>
                    )
                })}
            </CardContent>
        </Card>
    )
}

export default AdditionalLinksForm