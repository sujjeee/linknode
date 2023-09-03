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

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<DataProps>(initialData);

    const addNewData = (linkData: AdditionalLinkProps) => {
        setData((prevData) => ({
            ...prevData,
            ls: [...prevData.ls, linkData]
        }))
    }

    // Function to update the framework array
    const updateIndex = (updatedIndex: AdditionalLinkProps[]) => {
        setData((prevState) => ({
            ...prevState,
            ls: updatedIndex,
        }));
    };

    return (
        <DataContext.Provider value={{ data, addNewData, updateIndex }}>
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