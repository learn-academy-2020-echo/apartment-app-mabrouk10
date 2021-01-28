// import React, { Component } from 'react'

// class ApartmentShow extends Component {
//   render() {
//     const { apartment } = this.props
//     return (
//       <>
//         <h3>Show Page</h3>
//         <p>{ apartment.street }</p>
//         <p>{ apartment.city }</p>
//         <p>{ apartment.state }</p>
//         <p>{ apartment.manager }</p>
//         <p>{ apartment.email }</p>
//         <p>{ apartment.price }</p>
//         <p>{ apartment.bedrooms }</p>
//         <p>{ apartment.bathrooms }</p>
//         <p>{ apartment.pets }</p>

//         {/* <NavLink to={`/aptedit/${apartment.id}`}> */}
//         <NavLink to={`/aptedit/`}>
//                   <Button color="secondary">
//                     Edit
//                   </Button>
//                 </NavLink>
//       </>
//     )
//   }
// }
// export default ApartmentShow

import React, { Component } from 'react';
import { Button, Card, CardTitle, Col, CardText } from 'reactstrap'
import { NavLink } from 'react-router-dom'


class ApartmentShow extends Component {
    render() {
    let { apartment } = this.props
    // console.log('apt state in show',apartment)
        return(
            <Col className = "cat-edit-1">
            <Card body >
              <CardTitle>Street: { apartment.street }</CardTitle>
              <CardText>City: { apartment.city }</CardText>
              <CardText>State: { apartment.state }</CardText>
              <CardText>Manager: { apartment.manager }</CardText>
              <CardText>Email: { apartment.email }</CardText>
              <CardText>Price: { apartment.price }</CardText>
              <CardText>Bedrooms: { apartment.bedrooms }</CardText>
              <CardText>Bathrooms: { apartment.bathrooms }</CardText>
              <CardText>Pets: { apartment.pets }</CardText>

              <CardText><center>
                <img src={apartment.pic} width="300" height="300"></img>
              </center>
              </CardText>

              
              
            </Card>

            <br/>
              <NavLink
                to={`/aptedit/${apartment.id}`}
              >
                <Button color="secondary">
                  Edit Profile 
                </Button>
              </NavLink>
            <br/>
              <NavLink
                  to={"/aptindex"}
                >
                  <Button 
                  color="secondary" 
                  onClick = { () => this.props.deleteApt(this.props.apartment.id) }>Delete Apartment
                  </Button>
              </NavLink>

          </Col>
        )
}
}

export default ApartmentShow;
