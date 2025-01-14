import { createContext, useState, useContext } from 'react';


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ka'); 

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'ka' ? 'en' : 'ka'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
