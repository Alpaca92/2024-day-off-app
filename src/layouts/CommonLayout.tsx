import { Outlet } from 'react-router';
import { useEffect, useState } from 'react';

const CommmonLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
  }, [isDarkMode]);

  return <Outlet />;
};

export default CommmonLayout;
