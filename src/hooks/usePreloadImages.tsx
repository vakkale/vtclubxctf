import { useEffect } from 'react';

declare global {
  interface Window {
    usePreloadImagesData?: Record<string, unknown[]>;
  }
}

export const usePreloadImages = (imageSrcs: string[]): void => {
  console.log("got to funct 1");
  useEffect(() => {
    console.log("got to useEffect");
    const randomStr = Math.random().toString(32).slice(2) + Date.now();
    window.usePreloadImagesData = window.usePreloadImagesData ?? {};
    window.usePreloadImagesData[randomStr] = [];
    for (const src of imageSrcs) {
      console.log("going through images");
      // preload the image
      const img = new Image();
      img.src = src;
      // keep a reference to the image
      window.usePreloadImagesData[randomStr].push(img);
    }
    return () => {
      delete window.usePreloadImagesData?.[randomStr];
      console.log("deleted ref 1");
    };
  }, [ imageSrcs ]);
};