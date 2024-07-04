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
                border: '1px rgb(2, 7, 21)',
                borderRadius: '5px',
                backgroundColor: 'rgb(2, 7, 21)',
                color: 'rgb(255, 255, 255 )',
                opacity: '0.8',
                marginTop: '20px',
                marginRight: '10px',
                padding: '7px',
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