import * as React from "react"
import { Link } from "gatsby"

import Categories from "../../Categories"
import NavToggle from "../HeaderHamburger"
import Headroom from "headroom.js"
import DarkModeToggle from "../../DarkModeToggle"

import "./Header.scss"


export default function Header({ location, title }) {
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
                <h1 className="main_heading">
                    <Link to="/">{title}</Link>
                </h1>
            </div>

            <DarkModeToggle />

            <div className="headroom_nav">
                <Categories location={location} />
            </div>
        </header>
    )
}