import * as React from "react"
import TagList from "../../TagList"

export default function Header({ title, date, author, tags, timeToRead }) {
    return (
        <header style={{
            borderBlock: `2px rgb(2, 7, 21) solid`,
            padding: `1rem`,
        }}>
          <h1 itemProp="headline">{title}</h1>
          <b>@{author}</b> · {date} · {timeToRead} min read
          <TagList tags={tags} />
        </header>
    )
}