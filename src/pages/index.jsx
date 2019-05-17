import React from "react"
import { Link } from "gatsby"

const indexPage = () => (
  <div>
    <h1>Hello gatsby!</h1>
    <p>I'm manu hdez, a fullstack designer</p>
    <Link to="/blog">blog</Link>
    <br />
    <Link to="/about">about</Link>
    <br />
    <Link to="/contact">contact</Link>
    <br />
  </div>
)

export default indexPage
