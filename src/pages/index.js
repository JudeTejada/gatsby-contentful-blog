import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';




import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const MainHeading = styled.h1`
font-size:4rem;
font-weight:700;

`





const IndexPage = () => (


  
  <Layout>
    <SEO title="Home" />
    <MainHeading>A Blog for simplist</MainHeading>
    <p>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga perferendis
      excepturi quo, sint ducimus nam corrupti maiores, earum recusandae,
      laborum dolor adipisci.
    </p>
  </Layout>
)

export default IndexPage
