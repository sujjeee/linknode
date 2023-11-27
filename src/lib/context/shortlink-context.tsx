import type { ShortLinkProps } from '@/types';
import React, { createContext, useContext, useState } from 'react';

const ShortLinkContext = createContext<
  | {
      shortUrlInfo: ShortLinkProps;
      setShortUrlInfo: React.Dispatch<React.SetStateAction<ShortLinkProps>>;
    }
  | undefined
>(undefined);

export const ShortLinkProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [shortUrlInfo, setShortUrlInfo] = useState<ShortLinkProps>({
    authorization: '',
    projectSlug: '',
    domain: '',
    rewrite: false,
    url: '',
    shortLink: '',
    password: '',
  });

  return (
    <ShortLinkContext.Provider value={{ shortUrlInfo, setShortUrlInfo }}>
      {children}
    </ShortLinkContext.Provider>
  );
};

export const useShortener = () => {
  const context = useContext(ShortLinkContext);
  if (!context) {
    throw new Error('useShortLink must be used within a ShortLinkProvider');
  }
  return context;
};
