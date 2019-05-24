import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const head = props => {
  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { title } = metadata.site.siteMetadata

  return <Helmet title={`${title} | ${props.title}`} />
}

export default head
