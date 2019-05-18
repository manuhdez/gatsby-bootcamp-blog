import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            fields {
              slug
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
            const { slug } = postData.node.fields

            return (
              <li key={title + date}>
                <h2>
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </h2>
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
