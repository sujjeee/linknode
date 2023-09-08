const BgTheme1 = () => {
    return (
        <div className="relative h-full w-full bg-white">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
    );
};

const BgTheme2 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
    );
};

const BgTheme3 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
    );
};

const BgTheme4 = () => {
    return (
        <div className="relative h-full w-full bg-white"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" /></div>
    );
};

const BgTheme5 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
    );
};

const BgTheme6 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]" />
        </div>
    );
};

const BgTheme7 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        </div>
    );
};

const BgTheme8 = () => {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]" />
    );
};
const BgTheme9 = () => {
    return (
        <div className="absolute top-0 -z-10 h-full w-full bg-white">
            <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]" />
        </div>
    );
};


export const BACKGROUND_OPTIONS = [
    {
        name: 'Background Light Theme 1',
        component: <BgTheme1 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 2',
        component: <BgTheme2 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 3',
        component: <BgTheme3 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 4',
        component: <BgTheme4 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 5',
        component: <BgTheme5 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 6',
        component: <BgTheme6 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 7',
        component: <BgTheme7 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 8',
        component: <BgTheme8 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 9',
        component: <BgTheme9 />,
        theme: 'light',
    },
] as const;