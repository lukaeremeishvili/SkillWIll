import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; 
import { toggleTheme } from "../store/themeSlice";
import { useLanguage } from "../store/UseLanguage";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme);
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <h1>{language === "ka" ? "Todo აპლიკაცია" : "Todo App"}</h1>
      <button onClick={toggleLanguage}>
        {language === "ka" ? "KA" : "EN"}
      </button>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
