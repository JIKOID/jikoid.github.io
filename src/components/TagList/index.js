import * as React from "react"

import * as styles from "./TagList.module.scss"

export default function TagList({ tags }) {
    return (
        <div>
        {tags.map((tag, i) => (
            <span className={styles.tag} key={i}>
                <b>{tag}</b>
            </span>
        ))}
        </div>
    )
}