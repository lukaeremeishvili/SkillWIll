import './App.css';
import React, { useEffect } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useWindowResize from './hooks/useWindowResize';

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { width } = useWindowResize();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const currentTheme = width > 768 ? theme : 'light';

  useEffect(() => {
    document.body.style.backgroundColor = currentTheme === 'dark' ? '#333' : '#fff';
    document.body.style.color = currentTheme === 'dark' ? '#fff' : '#000';
  }, [currentTheme]);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>{currentTheme === 'dark' ? 'Dark Mode' : 'Light Mode'}</div>
    </div>
  );
}

export default App;
