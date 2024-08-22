import * as React from "react"
import "./Footer.scss"

export default function Footer() {
    return (
        <footer>
            <div className="footer_copylight">
                © {new Date().getFullYear()} Jaynam. Built with 
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>

            <div className="footer_hits">
                <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjikoid.github.io%2Fhit-counter&count_bg=%23000000&title_bg=%23000000&icon=macys.svg&icon_color=%23E7E7E7&title=visitors&edge_flat=false"/>
            </div>
        </footer>
    )
}