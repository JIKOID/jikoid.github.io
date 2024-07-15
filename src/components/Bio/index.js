/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Contacts from "../Contacts"
import * as styles from "./Bio.module.scss"


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
    <div className={styles.bio}>
      <StaticImage
        className={styles.bio_avatar}
        layout="fixed"
        formats={["auto", "webp", "avif", "png"]}
        src="../../images/avatar.png"
        width={80}
        height={80}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <div>
          <strong>{author.name}</strong>
          <div>{author?.summary || null}</div>
          <Contacts social={social} />
        </div>
      )}
    </div>
  )
}

export default Bio
