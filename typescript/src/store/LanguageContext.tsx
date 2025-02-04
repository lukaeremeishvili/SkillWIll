import React, { useState, ReactNode } from "react";
import { LanguageContext } from "./LanguageContextValue";


interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("ka");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ka" ? "en" : "ka"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
