import React, { Component, Fragment } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import NavBar from './NavBar'

class Header extends Component {
  render() {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
      <>
      <div className="header-nav">
            <NavBar logged_in={logged_in} sign_in={sign_out_route} sign_out={sign_out_route} />
        </div>
      </>
    )
  }
}
export default Header