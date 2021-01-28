import React, { Component } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentShow from './pages/ApartmentShow'
import ProtectedIndex from './pages/ProtectedIndex'
import NotFound from './pages/NotFound'
import EditApartment from './pages/EditApartment'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import mockApartments from './mockApartments.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.aptIndex()
  }
  
  aptIndex = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(aptArray => {
      // set the state with the data from the backend into the empty array
      this.setState({ apartments: aptArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }

  createNewApt = (newapt) => {
    return fetch("http://localhost:3000/apartments", {
      // converting an object to a string
      body: JSON.stringify(newapt),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.aptIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateApt = (apt, id) => {
    return fetch(`http://localhost:3000/apartments/${id}`, {
      // converting an object to a string
      body: JSON.stringify(apt),
      // specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json"
      },
      // HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.aptIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }

  deleteApt = (id) => {
    return fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      // this.aptIndex()
      return response.json()
    })
    // .then(payload =>{
    //   this.aptIndex()
    // })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  

  render () {
    console.log("logged in", this.props.logged_in)
    // console.log("current user", this.props.current_user.id)
    console.log("current user", this.props.current_user)
    console.log("apt state inside render", this.state.apartments)
    return (
      <Router>

        <Header
          logged_in={ this.props.logged_in }
          new_user_route={ this.props.new_user_route }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
        />

        <Switch>
          <Route exact path='/' component={ Home } />

          {/* -----Index----- */}
          <Route
            path='/aptindex'
            render= { (props) => <ApartmentIndex
              apartments = { this.state.apartments }
            />
            }
          />
          {/* -----Show----- */}
          <Route
            path='/aptshow/:id'
            render={ (props) => {
              let id = props.match.params.id
              console.log("id:",id)
              console.log("apt state:", this.state.apartments)
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return (
                <ApartmentShow apartment={ apartment } deleteApt={this.deleteApt} />
              )
            }}
            />

          {/* -----Protected Index----- */}
          {this.props.logged_in &&
          <Route
            path='/myapt'
            render={ (props) => {
              let id = this.props.current_user.id
              let myapartments = this.state.apartments.filter(apt => apt.user_id === id)
              console.log("state in my apt:",myapartments)
              return(
                <ProtectedIndex myapartments={ myapartments } />
              )
            }}
          />
          }

        {/* ------------NEW ROUTE---------------- */}

        {this.props.logged_in &&
        <Route
        path="/aptnew"
        render={ (props) => <ApartmentNew current_user={ this.props.current_user } createNewApt={ this.createNewApt }/> }
        />
        }

        {/* ------------EDIT ROUTE---------------- */}
        {this.props.logged_in &&
        <Route
            exact path={"/aptedit/:id"}
            render={ (props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return(
                <EditApartment
                  updateApt={ this.updateApt }
                  apartment={ apartment }
                />
              )
           }}
        />
          }

          {/* <Route path="/aptnew" component={ ApartmentNew } /> */}
          {/* <Route path="/aptedit" component={ EditApartment } /> */}
          <Route component={ NotFound } />
        </Switch>

      </Router>
    );
  }
}

export default App