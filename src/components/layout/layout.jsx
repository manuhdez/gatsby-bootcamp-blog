import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"
import Head from "../head/head"

import "../../styles/index.scss"
import scss from "./layout.module.scss"

export default props => (
  <React.Fragment>
    <Head title={props.title} />
    <div className={scss.container}>
      <div className={scss.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  </React.Fragment>
)
