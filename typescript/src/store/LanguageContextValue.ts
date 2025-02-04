import { createContext } from "react";
export interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}
export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
