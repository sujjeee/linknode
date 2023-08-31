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

interface SocialLink {
    l: string;
    i: string;
    u: string;
}