import * as React from "react"
import * as styles from "../Post.module.scss"

const Content = ({ post }) => {
    return (
        <div className={styles.content}>
            <section
            style={{ marginTop: `5rem`, marginBottom: `5rem` }}
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            />
        </div>
    )
}

export default Content;