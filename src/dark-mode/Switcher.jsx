import React, { useState } from 'react';
import useDarkSide from './useDarkMode';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className=' dark:bg-black bg-white rounded-full p-1 ' >
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
      </div>
    </>
  );
}