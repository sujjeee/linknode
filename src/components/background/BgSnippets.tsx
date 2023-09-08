const BgTheme1 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
    );
};
const BgTheme2 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
    );
};


const BgTheme3 = () => {
    return (
        <div className="absolute top-0  h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    );
};

const BgTheme4 = () => {
    return (
        <div className="absolute top-0 h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
    );
};

const BgTheme5 = () => {
    return (
        <div className="absolute top-0 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div></div>
    );
};

const BgTheme6 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    );
};

const BgTheme7 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
    );
};

const BgTheme8 = () => {
    return (
        <div className="absolute h-full w-full bg-white"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
    );
};
const BgTheme9 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
    );
};
const BgTheme10 = () => {
    return (
        <div className="absolute h-full w-full bg-white"><div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div></div>
    );
};
const BgTheme11 = () => {
    return (
        <div className="absolute inset-0  h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    );
};
const BgTheme12 = () => {
    return (
        <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
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
    {
        name: 'Background Light Theme 10',
        component: <BgTheme10 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 11',
        component: <BgTheme11 />,
        theme: 'light',
    },
    {
        name: 'Background Light Theme 12',
        component: <BgTheme12 />,
        theme: 'light',
    },
] as const;