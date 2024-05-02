import React, { createContext, useState } from "react";

export type SidebarTypes = {
  buttonIndex: number;
  setButtonIndex: (index: number) => void;
};
const SidebarContext = createContext<SidebarTypes | null>(null);
export const SidebarContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  return (
    <SidebarContext.Provider value={{ buttonIndex, setButtonIndex }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
