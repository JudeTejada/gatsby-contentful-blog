import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const FooterStyle = styled.footer`
  text-align: center;
  margin-top: 3rem;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <FooterStyle>
      <p>Created by {data.site.siteMetadata.author}</p>
    </FooterStyle>
  )
}

export default Footer
