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
import { Button } from '../ui/button'


interface AdditionalLinksFormProps {
    links: AdditionalLinkProps[];
    onUpdate: (links: AdditionalLinkProps[]) => boolean;
}

const AdditionalLinksForm: FC<AdditionalLinksFormProps> = ({ links, onUpdate }) => {

    const scrollDownRef = React.useRef<HTMLDivElement | null>(null)
    const [shouldScroll, setShouldScroll] = React.useState(false);

    const addLinkDetailForm = () => {
        const newLinks = [...links, { i: '', l: '', u: '' }];
        onUpdate(newLinks);
        setShouldScroll(true)
    };


    React.useEffect(() => {
        if (shouldScroll && scrollDownRef.current) {
            scrollDownRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            setShouldScroll(false);
        }
    }, [shouldScroll]);

    return (
        <>
            <Card className='w-full'>
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2xl">Extra Links</CardTitle>
                    <CardDescription>
                        Enter your additional link details here.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    {links.map((link, index) => {
                        return (
                            <Card className='p-4'>
                                <div className='space-y-4' key={index}>
                                    <div className="grid grid-cols-2 gap-2" >
                                        <div>
                                            <Label htmlFor={`icon-key-${index}`}>Icon Key</Label>
                                            <Input
                                                id={`icon-key-${index}`}
                                                type="text"
                                                placeholder="ri:4k-fill"
                                            // value={link}
                                            // onChange={(e) => updateLink(index, e.target.value)}
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
                                </div>
                            </Card>
                        )
                    })}
                    <Button
                        variant={"outline"}
                        onClick={addLinkDetailForm}
                    >
                        +
                    </Button>
                </CardContent>
            </Card>
            <div ref={scrollDownRef}></div>
        </>
    )
}

export default AdditionalLinksForm