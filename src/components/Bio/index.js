/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import getIcon from "../../utils/getIcons"
import getSocialLink from "../../utils/getSocialLink"
import Icon from "../Icon"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
            linkedIn
            tistory
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../../images/avatar.png"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
          <p>{author?.summary || null}</p>
          <p>{` `}</p>
          {Object.entries(social).map(([name, user]) => (
            <a href={getSocialLink(name, user)} target="_blank" rel="noreferrer">
              <Icon name={name} icon={getIcon(name)} />
            </a>
          ))}
        </p>
      )}
    </div>
  )
}

export default Bio