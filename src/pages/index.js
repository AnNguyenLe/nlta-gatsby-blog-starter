import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import PostCardList from "../components/PostCardList"

export default function Home({ data }) {
  const postList = data.allMdx.nodes
  console.log("data", data)
  return (
    <Layout>
      <Seo title="All posts" />
      <PostCardList postList={postList} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogList {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          category
          date(formatString: "MMM, Do YYYY")
          readTime
          slug
          title
          isFeaturedPost
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`
