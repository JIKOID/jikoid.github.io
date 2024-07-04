import * as React from "react"

export default function Footer() {
    return (
        <footer>
            © {new Date().getFullYear()}, Jaynam. Built with 
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    )
}