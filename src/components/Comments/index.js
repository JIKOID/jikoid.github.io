import * as React from "react";
import Giscus from '@giscus/react';

const Comments = () => {
    const [commentTheme, setCommentTheme] = React.useState(null);

    React.useEffect(() => {
        setCommentTheme(window.__theme === window.__DARK ? 'dark' : 'light');
        window.__onThemeChange = (theme) => {
            setCommentTheme(theme === window.__DARK ? 'dark' : 'light');
        };
    }, []);

    if (!commentTheme) return null;

    let giscusTheme = "light"

    if (commentTheme === 'dark') {
        giscusTheme = "dark"
    }

    return (
        <div>
            <Giscus
                id="comments"
                repo="JIKOID/jikoid.github.io"
                repoId="R_kgDOMQGdrQ"
                category="Comments"
                categoryId="DIC_kwDOMQGdrc4ChjPk"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme={giscusTheme}
                lang="ko"
                loading="lazy"
                crossorigin="anonymous"
            />
        </div>
    )
}

export default Comments;