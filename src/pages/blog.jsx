import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

const blogPage = props => {
  const postsData = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const { edges } = postsData.allMarkdownRemark

  return (
    <div>
      <Layout>
        <h1>Blog page</h1>
        <ol>
          {edges.map(postData => {
            const { title, date } = postData.node.frontmatter
            return (
              <li key={title + date}>
                <h2>{title}</h2>
                <p>{date}</p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}

export default blogPage
