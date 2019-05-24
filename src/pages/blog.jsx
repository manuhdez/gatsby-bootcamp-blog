import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"

import scss from "./styles/blog.module.scss"

/**
 * Markdown posts blogPage
 */
// const blogPage = props => {
//   const postsData = useStaticQuery(graphql`
//     query {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               title
//               date
//             }
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)

//   const { edges } = postsData.allMarkdownRemark

//   return (
//     <div>
//       <Layout>
//         <h1>Blog posts</h1>
//         <ol className={scss.posts}>
//           {edges.map(postData => {
//             const { title, date } = postData.node.frontmatter
//             const { slug } = postData.node.fields

//             return (
//               <li key={title + date} className={scss.post}>
//                 <Link to={`/blog/${slug}`}>
//                   <h2>{title}</h2>
//                   <p>{date}</p>
//                 </Link>
//               </li>
//             )
//           })}
//         </ol>
//       </Layout>
//     </div>
//   )
// }

/**
 * Contentful posts blogPage
 */
const blogPage = () => {
  const postsData = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const { edges } = postsData.allContentfulBlogPost

  return (
    <Layout title="Blog">
      <h1>Blog posts</h1>
      <ol className={scss.posts}>
        {edges.map(postData => {
          const { title, slug, publishedDate } = postData.node

          return (
            <li key={title + publishedDate} className={scss.post}>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default blogPage
