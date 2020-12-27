import { Link, graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderMain = styled.header`
  padding: 1rem 0 3rem;
  margin-bottom: 3.5rem;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderTitle = styled(Link)`
  color: #000;
  font-size: 1.3rem;
  text-decoration: none;
`

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`
const NavItem = styled(Link)`
  color: #999;
  font-size: 0.9rem;
  text-decoration: none !important;
  margin-right: 1.3rem;


  &:hover {
    color: #666;
  }
`

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <HeaderMain>
      <HeaderContent>
        <h3>
          <HeaderTitle to="/">{data.site.siteMetadata.title}</HeaderTitle>
        </h3>

        <NavList>
          <li>
            <NavItem activeStyle={{ color: "#333" }} to="/about">
              About
            </NavItem>
          </li>

          <li>
            <NavItem activeStyle={{ color: "#333" }} to="/blog">
              Blog
            </NavItem>
          </li>

          <li>
            <NavItem activeStyle={{ color: "#333" }} to="/">
              Home
            </NavItem>
          </li>
        </NavList>
      </HeaderContent>
    </HeaderMain>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
