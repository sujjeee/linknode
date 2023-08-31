"use client"

import React, { FC } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/components/ui/card'
import { SocialInput } from '@/components/ui/social-input'


interface SocialLinksFormProps {
    socialLinksProvider: SocialLinkProviderProps[];
    data: Record<keyof typeof socialLinksData, string>;
    onUpdate: (linkId: keyof typeof socialLinksData, value: string) => void;
}

const SocialLinksForm: FC<SocialLinksFormProps> = ({
    socialLinksProvider, data, onUpdate
}) => {
    return (
        <Card className='w-full'>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Social Links</CardTitle>
                <CardDescription>
                    Enter your social media links here.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
                {socialLinksProvider.map((link) => {
                    return (
                        <SocialInput
                            key={link.name}
                            id={link.name}
                            icon={link.icon}
                            placeholder={`${link.name}.com/johndoe`}
                            value={data[link.id]}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                onUpdate(link.id, e.target.value);
                            }}
                        />
                    );
                })}
            </CardContent>
        </Card>
    )
}

export default SocialLinksForm