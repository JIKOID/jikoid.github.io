/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Seo = ({ description, title, children }) => {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            social {
              github
              linkedIn
              tistory
            }
          }
        }
        featuredImage: file(absolutePath: {glob: "**/src/images/avatar.png"}) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 800)
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const ogImage = site.featuredImage ?? featuredImage?.childImageSharp?.gatsbyImageData;

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage.images.fallback.src} />
      <meta property="og:image:width" content={ogImage.width} />
      <meta property="og:image:height" content={ogImage.height} />

      <Helmet>
        {/* Naver Web Master */}
        <meta name="naver-site-verification" content="ffae897975016f2b8829e0672767e6e41a4c2bd7" />  
        {/* Google Adsense */}
        <meta name="google-adsense-account" content="ca-pub-4021090588937253" />
      </Helmet>

      {children}
    </>
  )
}

export default Seo
