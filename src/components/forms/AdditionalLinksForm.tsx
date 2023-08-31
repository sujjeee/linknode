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
    onUpdate: (links: AdditionalLinkProps[],) => void;
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
                            <Card className='p-4' key={index}>
                                <div className='space-y-4'>
                                    <div className="grid md:grid-cols-2 gap-2" >
                                        <div>
                                            <Label htmlFor={`icon-key-${index}`}>Icon Key</Label>
                                            <Input
                                                id={`icon-key-${index}`}
                                                type="text"
                                                placeholder="ri:4k-fill"
                                                value={link.i}
                                                // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                //     const newLinks = [...links, { i: e.target.value, l: link.l, u: link.u }];
                                                //     onUpdate(newLinks);
                                                // }}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newLinks = [...links];
                                                    newLinks[index].i = e.target.value; // Update the specific value
                                                    onUpdate(newLinks);
                                                }}
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="link-name">Lable</Label>
                                            <Input
                                                id="link-name"
                                                type="text"
                                                placeholder="Amazon"
                                                value={link.l}
                                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                    const newLinks = [...links];
                                                    newLinks[index].l = e.target.value; // Update the specific value
                                                    onUpdate(newLinks);
                                                }}
                                            // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            //     const newLinks = [...links, { i: link.i, l: e.target.value, u: link.u }];
                                            //     onUpdate(newLinks);
                                            // }}
                                            // onChange={(e) => onUpdate(index, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="link-url">Destination URL</Label>
                                        <Input
                                            id="link-url"
                                            type="url"
                                            placeholder="http://example.com"
                                            value={link.u}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                const newLinks = [...links];
                                                newLinks[index].u = e.target.value; // Update the specific value
                                                onUpdate(newLinks);
                                            }}
                                        // onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        //     const newLinks = [...links, { i: link.i, l: e.target.value, u: e.target.value }];
                                        //     onUpdate(newLinks);
                                        // }}
                                        />
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