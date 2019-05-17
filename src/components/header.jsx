import React from "react"
import { Link } from "gatsby"

const headerStyle = {
  width: "100%",
  background: "yellow",
}

const header = () => (
  <header style={headerStyle}>
    <h1>manuhdez</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default header
