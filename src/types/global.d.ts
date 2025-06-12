declare global {
  function gtag(command: string, targetId: string, config?: any): void;
  
  interface Window {
    gtag: typeof gtag;
    trackingFunctions: {
      onLoad: (config: { appId: string }) => void;
    };
  }
}

export {};