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
    m: string;
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
}

const initialData: DataProps = {
    n: '',
    i: '',
    d: '',
    f: '',
    t: '',
    ig: '',
    m: '',
    gh: '',
    tg: '',
    l: '',
    e: '',
    w: '',
    y: '',
    ls: [],
};

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

    return (
        <DataContext.Provider value={{ data, addNewData, updateIndex, updateProfileInfo, updateSocialInfo, updateAdditionalInfo }}>
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