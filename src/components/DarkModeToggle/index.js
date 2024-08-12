import React, { useState, useEffect, useCallback } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import "./DarkModeToggle.scss";

const ThemeIcon = {
    dark: <FaSun />,
    light: <FaMoon />,
};

export default function DarkModeToggle() {
    const [theme, setTheme] = useState(null);

	let isDarkMode = false;
	if (typeof window !== 'undefined')
		isDarkMode = theme === window.__DARK;

	const onClickDarkModeButton = useCallback(() => {
		const newTheme = isDarkMode ? window.__LIGHT : window.__DARK;
		window.__setTheme(newTheme);
		setTheme(newTheme);
	}, [isDarkMode]);

	useEffect(() => {
		setTheme(window.__theme);
	}, []);

	if (!theme) {
		return null;
	}
    if (theme === null) {
        return null;
    }

    return (
        <div className="dark_mode_toggle">
            <button onClick={onClickDarkModeButton}>
                {isDarkMode ? ThemeIcon.dark : ThemeIcon.light}
            </button>
        </div>
    );
}
