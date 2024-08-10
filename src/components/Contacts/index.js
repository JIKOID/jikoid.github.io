import * as React from "react"

import getSocialLink from "../../utils/getSocialLink"
import Icon from "../Icon"
import getIcon from "../../utils/getIcons"

import "./Contacts.scss"



export default function Contacts({ social }) {
    if (!social) {
        return null
    }

    return (
        <div className="social_link">
            {Object.entries(social).map(([name, user]) => (
                <a href={getSocialLink(name, user)} target="_blank" rel="noreferrer" key={name} style={{
                    textDecoration: "none",
                }}>
                    <div>
                        <Icon name={name} icon={getIcon(name)} />
                        <span>{name}</span>
                    </div>              
                </a>
            ))}
        </div>
    )
}