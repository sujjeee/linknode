'use client'

import React from 'react'
import AdditionalLinkCard from '@/components/AdditionalLinkCard';
import { Icon } from '@iconify/react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { ImageIcon } from 'lucide-react';

const DisplayData: React.FC<DisplayDataProps> = ({ acc }) => {

    const allSocialLinksAreEmpty =
        !acc.f &&
        !acc.t &&
        !acc.ig &&
        !acc.tg &&
        !acc.w &&
        !acc.y &&
        !acc.e &&
        !acc.gh &&
        !acc.l;

    const iconMap: Record<string, string> = {
        f: "ph:facebook-logo-duotone",
        t: "ph:twitter-logo-duotone",
        ig: "ph:instagram-logo-duotone",
        tg: "ph:telegram-logo-duotone",
        w: "ph:whatsapp-logo-duotone",
        y: "ph:youtube-logo-duotone",
        e: "ph:envelope-duotone",
        gh: "ph:github-logo-duotone",
        l: "ph:linkedin-logo-duotone"
    };

    return (
        <main className="p-2 h-full w-full space-y-8 max-w-lg mx-auto overflow-y-scroll hide_scrollbar">
            <div className="text-center z-50">
                {acc.i && (
                    <Avatar className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
                        <AvatarImage src={acc.i} alt={`${acc.n}'s profile picture`} className="h-full w-full object-cover" />
                        <AvatarFallback>
                            <ImageIcon className='h-8 w-8 text-gray-300' />
                        </AvatarFallback>
                    </Avatar>
                )}
                {acc.n && <h1 className="text-2xl font-bold mt-4 text-slate-800">{acc.n}</h1>}
                {acc.d && <p className="text-sm mt-2 text-slate-600">{acc.d}</p>}
            </div>
            {!allSocialLinksAreEmpty && (
                <div className="flex items-center justify-center flex-wrap">
                    {Object.entries(acc).map(([key, value]) => {
                        const excludedKeys = ["i", "n", "d", "bg"];

                        if (key !== "ls" && value && !excludedKeys.includes(key)) {
                            const propIcon = iconMap[key as keyof typeof iconMap];
                            if (key === "e") {
                                // Handle email link generation
                                return (
                                    <span className="p-1" key={key}>
                                        <a href={`mailto:${value}`}>
                                            <Icon icon={propIcon} className="h-6 w-6" />
                                        </a>
                                    </span>
                                );
                            } else if (key === "w") {
                                // Handle WhatsApp link generation
                                const whatsappValue = value.startsWith("https://wa.me/")
                                    ? value // If it already starts with the correct prefix
                                    : `https://wa.me/${value}`;

                                return (
                                    <span className="p-1" key={key}>
                                        <a href={whatsappValue} target="_blank" rel="noopener noreferrer">
                                            <Icon icon={propIcon} className="h-6 w-6" />
                                        </a>
                                    </span>
                                );
                            } else {
                                return (
                                    <span className="p-1" key={key}>
                                        <a href={value} target="_blank" rel="noopener noreferrer">
                                            <Icon icon={propIcon} className="h-6 w-6" />
                                        </a>
                                    </span>
                                );
                            }
                        }
                        return null;
                    })}
                </div>
            )}
            <ul className="space-y-2">
                {acc.ls && acc.ls.map((link, id) => (
                    <AdditionalLinkCard
                        label={link.l}
                        icon={link.i}
                        url={link.u}
                        key={id}
                    />
                ))}
            </ul>
        </main>
    )
}

export default DisplayData