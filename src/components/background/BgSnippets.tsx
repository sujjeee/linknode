// original source: https://github.com/ibelick/background-snippets/blob/main/app/components/background.tsx

/* eslint-disable tailwindcss/no-contradicting-classname  */
const BgTheme1 = () => {
  return <div className="absolute inset-0 z-[-10] h-full w-full bg-white" />;
};

const BgTheme8 = () => {
  return (
    <div className="absolute z-[-10] h-full  w-full bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
    </div>
  );
};

const BgTheme2 = () => {
  return (
    <div className="absolute inset-0  z-[-10] h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
    </div>
  );
};

const BgTheme9 = () => {
  return (
    <div className="absolute inset-0 z-[-10] h-full  w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
  );
};

const BgTheme7 = () => {
  return (
    <div className="absolute inset-0 z-[-10] h-full  w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute inset-x-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
    </div>
  );
};

const BgTheme10 = () => {
  return (
    <div className="absolute z-[-10]  h-full  w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
};
const BgTheme11 = () => {
  return (
    <div className="absolute inset-0  z-[-10] h-full  w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
  );
};

const BgTheme12 = () => {
  return (
    <div className="absolute inset-0 z-[-10] h-full  w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
  );
};

const BgTheme4 = () => {
  return (
    <div className="absolute top-0 z-[-10] h-full w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
  );
};

const BgTheme5 = () => {
  return (
    <div className="absolute top-0 z-[-10] h-full  w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] translate-x-[-30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};

const BgTheme6 = () => {
  return (
    <div className="absolute inset-0 z-[-10] h-full  w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
  );
};

const BgTheme3 = () => {
  return (
    <div className="absolute inset-0 z-[-10] h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
    </div>
  );
};

export const BACKGROUND_OPTIONS = [
  {
    code: '#FFFFFF',
    component: <BgTheme1 />,
    name: 'WhiteCanvas',
  },
  {
    code: '#4F4F4F',
    component: <BgTheme8 />,
    name: 'ShadowyGray',
  },
  {
    code: '#C9EBFF',
    component: <BgTheme2 />,
    name: 'LinearSky',
  },
  {
    code: '#E6E7EB',
    component: <BgTheme9 />,
    name: 'SubtleGrayDots',
  },
  {
    code: '#FF00FF',
    component: <BgTheme7 />,
    name: 'BlurredFuchsia',
  },
  {
    code: '#E5E7EB',
    component: <BgTheme10 />,
    name: 'MaskedGray',
  },
  {
    code: '#808080',
    component: <BgTheme11 />,
    name: 'GradientGrid',
  },
  {
    code: '#F0F0F0',
    component: <BgTheme12 />,
    name: 'LightGrayLines',
  },
  {
    code: '#00A3FF',
    component: <BgTheme4 />,
    name: 'RadiantBlue',
  },
  {
    code: '#AD6DF4',
    component: <BgTheme5 />,
    name: 'GradientOrb',
  },
  {
    code: '#63E',
    component: <BgTheme6 />,
    name: 'RadialHalo',
  },
  {
    code: '#D5C5FF',
    component: <BgTheme3 />,
    name: 'VividCircles',
  },
] as const;
