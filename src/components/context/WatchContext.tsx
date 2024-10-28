import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
export interface AppleWatchUltraState {
  "main-body": {
    color?: string;
    texture?: "normal" | "matte";
  };
  "action-button": {
    color?: string;
    texture?: string;
  };
  "side-button": {
    color?: string;
    texture?: string;
  };
  "digital-crown": {
    color?: string;
    texture?: string;
  };
  "band-holder": {
    color?: string;
    texture?: string;
  };
  "band-inside": {
    color?: string;
    texture?: string;
  };
  "band-outside": {
    color?: string;
    texture?: "normal" | "leather";
  };
}


export type AppleWatchUltraStateKeys = keyof AppleWatchUltraState;

interface WatchContextType {
  watchState: AppleWatchUltraState;
  setWatchState: React.Dispatch<
    React.SetStateAction<AppleWatchUltraState>
  >;
}

// Create the context
const WatchContext = createContext<WatchContextType | undefined>(undefined);

// Provider component
export const WatchContextProvider = ({ children }: { children: ReactNode }) => {
  const [watchState, setWatchState] = useState<AppleWatchUltraState>({
    "main-body": {
      color: "#292929",
      texture: "normal"
    },
    "action-button": {
      color: "#DC602A",
    },
    "band-holder": {
      color: "#fffff",
    },
    "band-inside": {
      color: "#DC602A",
    },
    "band-outside": {
      color: "#DC602A",
      texture: "normal"
    },
    "digital-crown": {
      color: "#DC602A",
    },
    "side-button": {
      color: "#fffff",
    },
  });

  return (
    <WatchContext.Provider value={{ watchState, setWatchState }}>
      {children}
    </WatchContext.Provider>
  );
};

// Custom hook for consuming context
export const useWatchContext = (): WatchContextType => {
  const context = useContext(WatchContext);
  if (!context) {
    throw new Error("useWatchContext must be used within an AppProvider");
  }
  return context;
};
