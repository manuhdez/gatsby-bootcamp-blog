import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/index.scss"

export default props => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
)
