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
        // 로컬 스토리지에서 테마를 가져옵니다.
        const storedTheme = localStorage.getItem('theme');

        if (storedTheme) {
            window.__setTheme(storedTheme); // 전역 테마 설정
            setTheme(storedTheme); // 상태 업데이트
        } else {
            // 로컬 스토리지에 저장된 테마가 없다면 기본 테마를 사용합니다.
            setTheme(window.__theme);
        }
    }, []);

    const isDarkMode = theme === window.__DARK;

    const onClickDarkModeButton = useCallback(() => {
        const newTheme = isDarkMode ? window.__LIGHT : window.__DARK;
        window.__setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // 로컬 스토리지에 테마 저장
        setTheme(newTheme);
    }, [isDarkMode]);

    useEffect(() => {
        const utterancesEl = document.querySelector('iframe.utterances-frame');

        if (utterancesEl) {
            const utterancesTheme = theme === 'dark' ? "github-dark" : "github-light";

            utterancesEl?.contentWindow?.postMessage(
                {
                    type: "set-theme",
                    theme: utterancesTheme
                },
                "https://utteranc.es/"
            );
        }
    }, [theme]);

    if (!theme) {
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