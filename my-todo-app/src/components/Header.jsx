import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header>
      <h1>{language === 'ka' ? 'Todo აპლიკაცია' : 'Todo App'}</h1>
      <button onClick={toggleLanguage}>
        {language === 'ka' ? 'KA' : 'EN'}
      </button>
    </header>
  );
};

export default Header;
