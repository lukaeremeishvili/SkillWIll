import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header>
      <h1>{language === 'ka' ? 'Todo აპლიკაცია' : 'Todo App'}</h1>
      <button onClick={toggleLanguage}>
        {language === 'ka' ? 'KA' : 'EN'}
      </button>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;