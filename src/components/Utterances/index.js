import * as React from "react";
import "./utterances.scss";

const Utterances = () => {
    const rootElm = React.useRef(null);
    const [status, setStatus] = React.useState("pending");

    const currentTheme = localStorage.getItem('theme');
    const utterancesTheme = currentTheme === window.__DARK ? "github-dark" : "github-light";

    React.useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://utteranc.es/client.js";
        script.async = true;
        script.setAttribute("repo", "JIKOID/blog-comments");
        script.setAttribute("issue-term", "pathname");
        script.setAttribute("theme", utterancesTheme); // 테마 설정
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
    }, [utterancesTheme]); // `utterancesTheme`을 의존성 배열에 추가

    return (
        <div className="comments_wrapper">
            {status === "pending" && <p>Loading Comments...</p>}
            {status === "failed" && <p>Failed to load comments</p>}
            <div ref={rootElm} />
        </div>
    );
};

export default Utterances;
