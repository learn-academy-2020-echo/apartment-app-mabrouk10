import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    console.log(this.props.logged_in)
    const{
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <h1>Hello</h1>
        {
          !logged_in &&
        <a href = {sign_in_route}>Sign In</a>
        }
        {
          logged_in &&
        <a href = {sign_out_route}>Sign Out</a>
        }
      </React.Fragment>
    );
  }
}

export default App
