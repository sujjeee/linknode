import React, { createContext, useContext, useState } from 'react';

interface AdditionalLinkProps {
    id: number
    i: string;
    l: string;
    u: string;
}

interface DataProps {
    i: string;
    n: string;
    d: string;
    f: string;
    t: string;
    ig: string;
    tg: string;
    w: string;
    y: string;
    e: string;
    gh: string;
    l: string;
    ls: AdditionalLinkProps[];
}

interface DataContextType {
    data: DataProps;
    addNewData: (linkData: AdditionalLinkProps) => void;
    updateIndex: (updatedIndex: AdditionalLinkProps[]) => void;
    updateProfileInfo: (name: any, value: any) => void;
    updateSocialInfo: (name: any, value: any) => void;
    updateAdditionalInfo: (updatedIndex: any) => void;
    showDemo: () => void;

}

const initialData: DataProps = {
    n: '',
    i: '',
    d: '',
    f: '',
    t: '',
    ig: '',
    gh: '',
    tg: '',
    l: '',
    e: '',
    w: '',
    y: '',
    ls: [],
};

const demoData: DataProps = {
    n: 'John Snow',
    d: "I'm John Snow, the king in the north. I know Nothing.",
    i: 'https://i.insider.com/56743fad72f2c12a008b6cc0',
    f: 'https://www.facebook.com/john_snow',
    t: 'https://twitter.com/john_snow',
    ig: 'https://www.instagram.com/john_snow',
    e: 'mail@john_snow.cc',
    gh: 'https://github.com/john_snow',
    tg: 'https://t.me/john_snow',
    w: '+918888888888',
    y: 'https://youtube.com/@john_snow',
    l: 'https://linkedin.com/john_snow',
    ls: [
        {
            id: 1,
            i: 'ph:globe-duotone',
            l: 'My Website',
            u: 'https://example.com',
        },
        {
            id: 2,
            i: 'ant-design:amazon-outlined',
            l: 'Amazon wishlist',
            u: 'https://amazon.in',
        },
        {
            id: 3,
            i: 'grommet-icons:reactjs',
            l: 'React JS course',
            u: 'https://reactjs.org/',
        },
        {
            id: 4,
            i: 'iconoir:donate',
            l: 'Donate for our cause',
            u: 'https://who.int',
        },
        {
            id: 5,
            i: 'ph:file-pdf',
            l: 'Download my resume',
            u: 'https://google.com',
        },
    ],
}
interface ProfileInfoUpdate {
    name: string;
    value: string;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<DataProps>(initialData);

    const addNewData = (linkData: AdditionalLinkProps) => {
        setData((prevData) => ({
            ...prevData,
            ls: [...prevData.ls, linkData]
        }))
    }

    const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
        setData((prevState) => ({
            ...prevState,
            ls: updatedIndex,
        }));
    };
    const updateAdditionalInfo = (updatedIndex: any) => {
        setData((prevState) => ({
            ...prevState,
            ls: updatedIndex,
        }));
    };

    const updateProfileInfo = (name: any, value: any) => {
        console.log("hitted in context", data.ls)
        setData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const updateSocialInfo = (name: any, value: any) => {
        console.log("hitted in context", name, value)
        setData(prevData => ({ ...prevData, [name]: value }))
    };

    const showDemo = () => {
        setData(demoData)
    };

    return (
        <DataContext.Provider value={{ data, addNewData, updateIndex, updateProfileInfo, updateSocialInfo, updateAdditionalInfo, showDemo }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};