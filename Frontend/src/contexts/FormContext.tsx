import { createContext, useState } from "react";

export type FormContextTypes = {
  Form: {
    username: string;
    email: string;
    bio: string;
    profile_picture: any[];
    tags: [string];
  };
  setForm: (Form: any) => void;
};

export const formContext = createContext<FormContextTypes | null>(null);

export const FormContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [Form, setForm] = useState();
  return (
    <formContext.Provider value={{ Form, setForm }}>
      {children}
    </formContext.Provider>
  );
};
