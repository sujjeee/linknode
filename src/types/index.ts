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
    bg?: string
    ls?: AdditionalLinkProps[];
}

const socialLinksData = {
    f: 'facebook',
    t: 'twitter',
    ig: 'instagram',
    gh: 'github',
    tg: 'telegram',
    l: 'linkedin',
    e: 'email',
    w: 'whatsapp',
    y: 'youtube',
};

interface SocialLinkProviderProps {
    name: string;
    icon: string;
    id: keyof typeof socialLinksData;
}

interface AdditionalLinkProps {
    id: number
    i: string;
    l: string;
    u: string;
}

interface DisplayDataProps {
    acc: Acc;
}