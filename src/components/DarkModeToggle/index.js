import React, { useState, useEffect, useCallback } from "react";
import { FaSun, FaMoon } from 'react-icons/fa';
import "./DarkModeToggle.scss";

const ThemeIcon = {
    dark: <FaSun />,
    light: <FaMoon />,
};

export default function DarkModeToggle() {
    const [theme, setTheme] = useState(null);

    // 클라이언트 사이드에서만 `window`와 `localStorage`에 접근
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            setTheme(savedTheme || window.__theme);
        }
    }, []);

    // 클라이언트 사이드에서만 테마 변환 처리
    const onClickDarkModeButton = useCallback(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = theme === window.__DARK;
            const newTheme = isDarkMode ? window.__LIGHT : window.__DARK;
            window.__setTheme(newTheme);
            setTheme(newTheme);
        }
    }, [theme]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDarkMode = theme === window.__DARK;
            const isUtterances = document.querySelector('iframe.utterances-frame');

            if (isUtterances) {
                const utterancesTheme = isDarkMode ? "github-dark" : "github-light";
                const utterancesEl = document.querySelector('iframe.utterances-frame');

                utterancesEl?.contentWindow?.postMessage(
                    {
                        type: "set-theme",
                        theme: utterancesTheme
                    },
                    "https://utteranc.es/"
                );
            }
        }
    }, [theme]);

    if (theme === null) {
        return null;
    }

    const isDarkMode = theme === window.__DARK;

    return (
        <div className="dark_mode_toggle">
            <button onClick={onClickDarkModeButton}>
                {isDarkMode ? ThemeIcon.dark : ThemeIcon.light}
            </button>
        </div>
    );
}
