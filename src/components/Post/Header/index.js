import * as React from "react"
import TagList from "../../TagList"

import * as styles from "../Post.module.scss"

export default function Header({ title, date, author, tags, timeToRead }) {
    return (
        <header className={styles.post_header}>
          <h1 itemProp="headline">{title}</h1>
          <b>@{author}</b> · {date} · {timeToRead} min read
          <TagList tags={tags} />
        </header>
    )
}