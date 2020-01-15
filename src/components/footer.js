import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from "gatsby-image"
import footerStyles from './footer.module.scss'

const Footer = () => {
  const query = useStaticQuery(graphql`
  query {
    instagram: file(relativePath: {eq: "Instagram.png"}) {
      childImageSharp {
        fixed(height: 35) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    linkedIn: file(relativePath: {eq: "linkedIn.png"}) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    github: file(relativePath: {eq: "github.png"}) {
      childImageSharp {
        fixed(height: 38) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return (
    <footer>
      <div className={footerStyles.container}>
        <h1 className={footerStyles.name}> Gustavo Abdelnour, 2020 © </h1>
        <a href="https://www.linkedin.com/in/gustavo-abdelnour/" target="__blank">
          <Img fixed={query.linkedIn.childImageSharp.fixed}/>
        </a>
        <a href="https://github.com/gabdelnour" target="__blank">
          <Img fixed={query.github.childImageSharp.fixed}/>
        </a>
        <a href="https://www.instagram.com/abdel_goose/" target="__blank">
          <Img fixed={query.instagram.childImageSharp.fixed}/>
        </a>
        <h1 className={footerStyles.name}> gurabdelnour@gmail.com </h1>
      </div>
    </footer>
  )
}

export default Footer