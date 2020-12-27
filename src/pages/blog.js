import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components';


import Layout from "../components/layout"
import SEO from "../components/seo"




const Posts = styled.ol`

list-style: none;
    margin:0;
`

const Post = styled.li`

margin: 1rem 0;

a{
    background: #f4f4f4;
    color:#000;
    display:block;
    padding:1rem;
    text-decoration: none;

    &:hover{
        background: #e4e4e4;
    }
}

h2{
    margin-bottom:0;

}
p{
    color: #777;
    font-size:0.8rem;
    font-style:italic;
}
`


const BlogPage = () => {
  const data = useStaticQuery(graphql`
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

  return (
    <Layout>
      <div>
        <SEO title="blog page" />
        <h1>Blog Page</h1>

        <Posts >
          {data.allContentfulBlogPost.edges.map(({ node }) => (
            <Post className={blogStyles.post}>
              <Link key={node.title} to={`/blog/${node.slug}`}>
                <h2> {node.title} </h2>
                <p> {node.publishedDate}</p>
              </Link>
            </Post>
          ))}
        </Posts>
      </div>
    </Layout>
  )
}

export default BlogPage
