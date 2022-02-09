import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';

// const [darkMode, setDarkMode] = useState(false);
{/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}

const useDarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', initialValue);
    return [darkMode, setDarkMode];
}

export default useDarkMode;