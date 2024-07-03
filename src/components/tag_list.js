import * as React from "react"

export default function TagList({ tags }) {
    const tagList = tags.split(' ')

    return (
        <div>
        {tagList.map((tag, i) => (
            <span
            key={i}
            className="tag"
            style={{
                color: '#0b4216',
                marginTop: '20px',
                marginRight: '10px',
                display: 'inline-block',
                fontSize: '0.8em',
            }}
            >
            <b>#{tag}</b>
            </span>
        ))}
        </div>
    )
}