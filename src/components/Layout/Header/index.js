import * as React from "react"
import { Link } from "gatsby"

export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
        <h1 className="main-heading">
            <Link to="/">{title}</Link>
        </h1>
        )
    } else {
        header = (
        <Link className="header-link-home" to="/">{title}</Link>
        )
    }

    return (
        <header className="global-header">
            <title>{title}</title>
            {header}
        </header>
    )
}