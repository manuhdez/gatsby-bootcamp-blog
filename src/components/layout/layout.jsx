import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

import "../../styles/index.scss"
import scss from "./layout.module.scss"

export default props => (
  <div className={scss.container}>
    <div className={scss.content}>
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
)

// Video left at 1.18.07
