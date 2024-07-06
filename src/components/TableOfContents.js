import * as React from "react"

export default function TableOfContents({ content }) {
    return (
        <div 
            className="table-of-content" 
            dangerouslySetInnerHTML={{ __html: content }}
        />
    )
}