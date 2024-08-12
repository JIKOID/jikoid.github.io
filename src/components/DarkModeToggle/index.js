import React, { useState, useEffect, useCallback } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import "./DarkModeToggle.scss";

const ThemeIcon = {
    dark: <FaSun />,
    light: <FaMoon />,
};

export default function DarkModeToggle() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
		setTheme(window.__theme);
	}, []);

    const isDarkMode = theme === window.__DARK;

	const onClickDarkModeButton = useCallback(() => {
		const newTheme = isDarkMode ? window.__LIGHT : window.__DARK;
		window.__setTheme(newTheme);
		setTheme(newTheme);

         // Trigger rotation animation
        const button = document.querySelector('.dark_mode_toggle button');
        button.classList.add('rotate');

        // Remove the class after the animation completes
        setTimeout(() => {
            button.classList.remove('rotate');
        }, 500); // Match this duration with the CSS animation duration
	}, [isDarkMode]);

     // 훅이 조건적으로 호출되지 않도록 보장한 후 렌더링 조건 설정
     if (theme === null) {
        return null; // 초기 테마 설정이 완료되기 전까지는 렌더링하지 않음
    }

    return (
        <div className="dark_mode_toggle">
            <button onClick={onClickDarkModeButton}>
                {isDarkMode ? ThemeIcon.dark : ThemeIcon.light}
            </button>
        </div>
    );
}
