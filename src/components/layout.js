import React from 'react'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = () => {
    
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "Background.png"}) {
        childImageSharp {
          fluid(maxWidth: 4000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)

  return (
    <>
      <Header className={layoutStyles.header}/>
        <div className={layoutStyles.container}>
          <Img fluid={query.file.childImageSharp.fluid} />
        </div>
      <Footer/>
    </>
  )
}

export default Layout