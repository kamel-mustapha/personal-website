import React, { createContext, useState, ReactNode } from "react";

export enum Language {
  en = "en",
  fr = "fr",
}

interface LangContextType {
  state: Language;
  setState: React.Dispatch<React.SetStateAction<Language>>;
}

export const LangContext = createContext<LangContextType | undefined>(undefined);

interface LangProviderProps {
  children: ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ children }) => {
  const [state, setState] = useState<Language>(Language.en);

  return <LangContext.Provider value={{ state, setState }}>{children}</LangContext.Provider>;
};
