import React from 'react';
import type { APIResponse } from '@/types';

interface APIContextProps {
  someResponseInfo: APIResponse | null;
  setSomeResponseInfo: React.Dispatch<React.SetStateAction<APIResponse | null>>;
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  authKey: string;
  setAuthKey: React.Dispatch<React.SetStateAction<string>>;
  projectSlug: string;
  setProjectSlug: React.Dispatch<React.SetStateAction<string>>;
  shortedLink: string | null;
  setShortedLink: React.Dispatch<React.SetStateAction<string | null>>;
}

export const APIResponseContext = React.createContext<
  APIContextProps | undefined
>(undefined);

export const APIResponseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [someResponseInfo, setSomeResponseInfo] =
    React.useState<APIResponse | null>(null);
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [authKey, setAuthKey] = React.useState<string>('');
  const [projectSlug, setProjectSlug] = React.useState<string>('');
  const [shortedLink, setShortedLink] = React.useState<string | null>(null);

  return (
    <APIResponseContext.Provider
      value={{
        someResponseInfo,
        setSomeResponseInfo,
        isOpen,
        setOpen,
        authKey,
        setAuthKey,
        projectSlug,
        setProjectSlug,
        shortedLink,
        setShortedLink,
      }}
    >
      {children}
    </APIResponseContext.Provider>
  );
};

export const useAPIResponse = () => {
  const context = React.useContext(APIResponseContext);
  if (!context) {
    throw new Error('useAPIResponse must be used within a APIResponseContext');
  }
  return context;
};
