import * as React from "react"

import * as styles from "./TagList.module.scss"

export default function TagList({ tags }) {
    const tagList = tags.split(' ')

    return (
        <div>
        {tagList.map((tag, i) => (
            <span className={styles.tag} key={i}>
                <b>{tag}</b>
            </span>
        ))}
        </div>
    )
}