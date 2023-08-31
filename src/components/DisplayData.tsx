import React, { FC } from 'react'
import AdditionalLinkCard from './AdditionalLinkCard';
import { Icon } from '@iconify/react';

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
                {acc.i && (
                    <div className="h-20 w-20 rounded-full overflow-hidden ring ring-slate-200 mx-auto">
                        <img src={acc.i} alt="name" className="h-full w-full object-cover" />
                    </div>
                )}
                {acc.n && <h1 className="text-2xl font-bold mt-4 text-slate-800">{acc.n}</h1>}
                {acc.d && <p className="text-sm mt-2 text-slate-600">{acc.d}</p>}
            </div>
            {!allSocialLinksAreEmpty && (
                <div className="flex items-center justify-center flex-wrap">
                    {Object.entries(acc).map(([key, value]) => {
                        const excludedKeys = ["i", "n", "d"];

                        if (key !== "ls" && value && !excludedKeys.includes(key)) {
                            const propIcon = iconMap[key as keyof typeof iconMap];
                            return (
                                <span className="p-1" key={key}>
                                    <a href={value} target="_blank" rel="noopener noreferrer">
                                        <Icon icon={propIcon} className="h-6 w-6" />
                                    </a>
                                </span>
                            );
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