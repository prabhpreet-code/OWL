import React, { createContext, useState } from "react";

export type ButtonTypes = {
  buttonIndex: number;
  setButtonIndex: (index: number) => void;
};
const ButtonContext = createContext<ButtonTypes | null>(null);
export const ButtonContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [buttonIndex, setButtonIndex] = useState<number>(0);

  return (
    <ButtonContext.Provider value={{ buttonIndex, setButtonIndex }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonContext;
