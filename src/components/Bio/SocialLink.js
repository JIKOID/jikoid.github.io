import * as React from "react"
import Icon from "../Icon"

import getIcon from "../../utils/getIcons"
import getSocialLink from "../../utils/getSocialLink"

import * as styles from "./sociallink.module.scss"

export default function SocialLink({social}) {
    if (!social) {
        return null
    }

    return (
        <div className={styles.social_link}>
            {Object.entries(social).map(([name, user]) => (
                <a href={getSocialLink(name, user)} target="_blank" rel="noreferrer" style={{
                    textDecoration: "none",
                }}>
                    <div>
                        <Icon name={name} icon={getIcon(name)} />
                        <p>{name}</p>
                    </div>              
                </a>
            ))}
        </div>
    )
}