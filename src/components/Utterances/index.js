import React, { useState, useEffect, useRef } from "react";
import "./utterances.scss";

const Utterances = () => {
    const rootElm = useRef(null);
    const [status, setStatus] = useState("pending");
    const [utterancesTheme, setUtterancesTheme] = useState("github-light");

    // 클라이언트 사이드에서만 테마 설정
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const currentTheme = localStorage.getItem('theme');
            const theme = currentTheme === window.__DARK ? "github-dark" : "github-light";
            setUtterancesTheme(theme);
        }
    }, []);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://utteranc.es/client.js";
        script.async = true;
        script.setAttribute("repo", "JIKOID/blog-comments");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", utterancesTheme);
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("label", "comment :speech_balloon:");
        script.onload = () => setStatus("success");
        script.onerror = () => setStatus("failed");

        const currentRootElm = rootElm.current; // 클린업 함수에서 사용할 변수로 저장
        currentRootElm.appendChild(script);

        return () => {
            if (currentRootElm) {
                currentRootElm.innerHTML = ''; // Cleanup script on component unmount
            }
        };
    }, [utterancesTheme]);

    return (
        <div className="comments_wrapper">
            {status === "pending" && <p>Loading Comments...</p>}
            {status === "failed" && <p>Failed to load comments</p>}
            <div ref={rootElm} />
        </div>
    );
};

export default Utterances;
