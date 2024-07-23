import * as React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

import NavToggle from "../HeaderHamburger"

import * as styles from "../Layout.module.scss"

export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
        <h1 className={styles.main_heading}>
            <Link to="/">{title}</Link>
        </h1>
        )
    } else {
        header = (
        <h1 className={styles.header_link_home}>
            <Link to="/">{title}</Link>
        </h1>
        )
    }

    return (
        <header className={styles.global_header}>
            <title>{title}</title>

            <NavToggle />
            
            {header}
        </header>
    )
}