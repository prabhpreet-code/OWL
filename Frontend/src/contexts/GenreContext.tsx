import React, { createContext, useState } from "react";

export type GenreTypes = {
  genreName: string;
  setGenreName: (index: string) => void;
};
const GenreContext = createContext<GenreTypes | null>(null);
export const GenreContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [genreName, setGenreName] = useState<string>("");

  return (
    <GenreContext.Provider value={{ genreName, setGenreName }}>
      {children}
    </GenreContext.Provider>
  );
};

export default GenreContext;
