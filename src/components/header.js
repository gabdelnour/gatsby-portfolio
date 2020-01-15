import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'
import Img from "gatsby-image"

const Header = () => {
  const query = useStaticQuery(graphql`
  query {
    file(relativePath: {eq: "AbdelGooseLogo.png"}) {
      childImageSharp {
        fixed(height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)

  return (
    <header className={headerStyles.sticky}>
      <div className={headerStyles.navBar}>
        <Link to="/">
          <Img fixed={query.file.childImageSharp.fixed} className={headerStyles.logo}/>
        </Link>
        <div className={headerStyles.aboutBox}>
          <Link className={headerStyles.link} to="/about">About Me</Link>
        </div>
        <div className={headerStyles.aboutBox}>
          <Link className={headerStyles.link} to="/resume">Resume</Link>
        </div>
        <div className={headerStyles.aboutBox}>
          <Link className={headerStyles.link} to="/projects">Projects</Link>
        </div>
      </div>
    </header>
  )
}

export default Header