import React, { FC } from 'react'
import ExternalLink from './ExternalLink';
import { Icon } from '@iconify/react';

interface SocialLink {
    l: string;
    i: string;
    u: string;
}

interface Acc {
    i?: string;
    n?: string;
    d?: string;
    f?: string;
    t?: string;
    ig?: string;
    m?: string;
    tg?: string;
    w?: string;
    y?: string;
    e?: string;
    gh?: string;
    l?: string;
    ls: SocialLink[];
}

interface DisplayDataProps {
    acc: Acc;
}

const DisplayData: FC<DisplayDataProps> = ({ acc }) => {

    const allSocialLinksAreEmpty =
        !acc.f &&
        !acc.t &&
        !acc.ig &&
        !acc.m &&
        !acc.tg &&
        !acc.w &&
        !acc.y &&
        !acc.e &&
        !acc.gh &&
        !acc.l;

    const iconMap = {
        f: "ph:facebook-logo-duotone",
        t: "ph:twitter-logo-duotone",
        ig: "ph:instagram-logo-duotone",
        m: "ph:envelope-duotone",
        tg: "ph:telegram-logo-duotone",
        w: "ph:whatsapp-logo-duotone",
        y: "ph:youtube-logo-duotone",
        e: "ph:envelope-duotone",
        gh: "ph:github-logo-duotone",
        l: "ph:linkedin-logo-duotone"
    };

    return (
        <main className="p-4 bg-white h-full w-full space-y-8 pt-12 max-w-lg mx-auto">
            <div className="text-center">
                {acc.n && <h1 className="text-2xl font-bold mt-4 text-slate-800">{acc.n}</h1>}
                {acc.i && (
                    <div className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
                        <img src={acc.i} alt="name" className="h-full w-full object-cover" />
                    </div>
                )}
                {acc.d && <p className="text-sm mt-2 text-slate-600">{acc.d}</p>}
            </div>
            {!allSocialLinksAreEmpty && (
                <div className="flex items-center justify-center flex-wrap">
                    {Object.entries(acc).map(([key, value]) => {
                        console.log()
                        if (key !== "ls" && value) {
                            const propIcon = iconMap[key as keyof typeof iconMap];
                            return (
                                <span className="p-1" key={key}>
                                    <a href={value} target="_blank" rel="noopener noreferrer">
                                        <Icon icon={propIcon} className="h-5 w-5" />
                                    </a>
                                </span>
                            );
                        }
                        return null;
                    })}
                </div>
            )}
            <ul className="space-y-2">
                {acc.ls.map((link, id) => (
                    <ExternalLink
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