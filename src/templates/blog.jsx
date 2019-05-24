import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout/layout"

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `

// const blog = props => {
//   const { frontmatter, html } = props.data.markdownRemark
//   return (
//     <Layout>
//       <h1>{frontmatter.title}</h1>
//       <p>{frontmatter.date}</p>
//       <div dangerouslySetInnerHTML={{ __html: html }} />
//     </Layout>
//   )
// }

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        json
      }
    }
  }
`

const blog = props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const altText = node.data.target.fields.title["en-US"]
        const imgUrl = node.data.target.fields.file["en-US"].url

        return <img alt={altText} src={imgUrl} />
      },
    },
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}

export default blog
