import * as React from "react"
import "./TagList.scss"

export default function TagList({ tags }) {
    return (
        <div>
        {tags.map((tag, i) => (
            <span className="tag" key={i}>
                <b>{tag}</b>
            </span>
        ))}
        </div>
    )
}