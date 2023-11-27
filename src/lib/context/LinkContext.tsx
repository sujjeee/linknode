import React, { createContext, useContext, useState } from 'react';
import type { ExtraLinkProps, DataProps } from '@/types';

interface DataContextType {
  data: DataProps;
  addNewData: (linkData: ExtraLinkProps) => void;
  updateIndex: (updatedIndex: ExtraLinkProps[]) => void;
  updateProfileInfo: (name: string, value: string) => void;
  updateSocialInfo: (name: string, value: string) => void;
  updateAdditionalInfo: (updatedIndex: ExtraLinkProps[]) => void;
  showDemo: () => void;
  selectBackground: (bgcode: string) => void;
}

const initialData: DataProps = {
  n: '',
  i: '',
  d: '',
  f: '',
  t: '',
  ig: '',
  tg: '',
  gh: '',
  l: '',
  e: '',
  w: '',
  y: '',
  bg: '',
  ls: [],
};

const demoData: DataProps = {
  n: 'James Smith',
  i: 'https://cdn.discordapp.com/attachments/1084897258920738839/1148135723782914078/christian-buehner-DItYlc26zVI-unsplash1.jpg',
  d: "I'm a self-taught developer who is always learning and creating cool stuffs.",
  f: 'https://www.facebook.com/james_smith',
  t: 'https://twitter.com/james_smith',
  ig: 'https://www.instagram.com/james_smith',
  tg: 'https://t.me/james_smith',
  gh: 'https://github.com/james_smith',
  l: 'https://linkedin.com/james_smith',
  e: 'mail@james_smith.cc',
  w: '+916666666666',
  y: 'https://youtube.com/@james_smith',
  bg: '#4F4F4F',
  ls: [
    {
      id: 1,
      i: 'ph:laptop-duotone',
      l: 'My Portfolio Website',
      u: 'https://example.com',
    },
    {
      id: 2,
      i: 'ant-design:robot-outlined',
      l: 'My Chatbot Project',
      u: 'https://example.com/chatbot',
    },
    {
      id: 3,
      i: 'fluent:brain-circuit-20-regular',
      l: 'My Machine Learning Project',
      u: 'https://example.com/ml',
    },
    {
      id: 4,
      i: 'icon-park-outline:blockchain',
      l: 'My Blockchain Project',
      u: 'https://example.com/blockchain',
    },
    {
      id: 5,
      i: 'ph:pencil-duotone',
      l: 'My Blog Posts',
      u: 'https://example.com/blog',
    },
  ],
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<DataProps>(initialData);

  const selectBackground = (bgcode: string) => {
    setData((prevState) => ({
      ...prevState,
      bg: bgcode,
    }));
  };

  const addNewData = (linkData: ExtraLinkProps) => {
    setData((prevData) => ({
      ...prevData,
      ls: [...prevData.ls, linkData],
    }));
  };

  const updateIndex = (updatedIndex: ExtraLinkProps[]) => {
    setData((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };

  const updateAdditionalInfo = (updatedIndex: ExtraLinkProps[]) => {
    setData((prevState) => ({
      ...prevState,
      ls: updatedIndex,
    }));
  };

  const updateProfileInfo = (name: string, value: string) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateSocialInfo = (name: string, value: string) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const showDemo = () => {
    setData(demoData);
  };

  return (
    <DataContext.Provider
      value={{
        data,
        addNewData,
        updateIndex,
        updateProfileInfo,
        updateSocialInfo,
        updateAdditionalInfo,
        showDemo,
        selectBackground,
      }}
    >
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
