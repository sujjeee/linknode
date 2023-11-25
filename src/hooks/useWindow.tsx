import { useState, useEffect } from 'react';

type WindowSize = {
  width: number | undefined;
  height: number | undefined;
};

type WindowDimensions = {
  windowSize: WindowSize;
  isMobile: boolean;
  isDesktop: boolean;
};

export default function useWindow(): WindowDimensions {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile: boolean =
    typeof windowSize.width === 'number' && windowSize.width < 768;
  const isDesktop: boolean =
    typeof windowSize.width === 'number' && windowSize.width >= 768;

  return { windowSize, isMobile, isDesktop };
}
