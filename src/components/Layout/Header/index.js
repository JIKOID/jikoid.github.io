import * as React from "react"
import { Link } from "gatsby"

import Categories from "../../Categories"
import NavToggle from "../HeaderHamburger"
import Headroom from "headroom.js"

import "./Header.scss"


export default function Header({ location, title }) {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
        <h1 className="main_heading">
            <Link to="/">{title}</Link>
        </h1>
        )
    } else {
        header = (
        <h1 className="header_link_home">
            <Link to="/">{title}</Link>
        </h1>
        )
    }

    const headerRef = React.useRef();
    const headroom = React.useRef();

    React.useEffect(() => {
        headroom.current = new Headroom(headerRef.current);
        headroom.current.init();

        return () => headroom.current.destroy();
    }, []);

    return (
        <header ref={headerRef} className="global_header">
            <NavToggle />

            <div className="header_title">
                {header}
            </div>

            <div className="headroom_nav">
                <Categories location={location} />
            </div>
        </header>
    )
}