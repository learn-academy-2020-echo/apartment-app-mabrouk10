import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
// import { Button } from 'reactstrap'
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';


class ProtectedIndex extends Component {
  render() {
    return (
    <>
      <h1 className = 'myapt-h1'>My Apartments</h1>
        <div className="cats-display-wrapper">
        { this.props.myapartments && this.props.myapartments.map((apartment, index) => {
          return (
            <ListGroup key={index} className="cat-wrapper">
              {/* <a href={`/cats/${cat.id}`}><img style={{width: "300px"}} src={cat.image_path} /></a> */}
              <img style={{width: "300px"}} src={apartment.pic} />
              <a href={`/aptshow/${apartment.id}`}><img style={{width: "300px"}}/></a>
              <div className="cat-description-wrapper">

                <h4 className="cat-name">
                    <span style={{fontWeight: "bold"}}>{ apartment.street }</span>, 
                  {/* <span style={{fontWeight:"300"}}>{ apartment.street }</span> */}
                </h4>
                
                <ListGroupItemText>Street: { apartment.street } </ListGroupItemText>
                <ListGroupItemText>City: { apartment.city } </ListGroupItemText>
                <ListGroupItemText>State: { apartment.state } </ListGroupItemText>


                


                {/* <NavLink to={`/aptshow/${apartment.id}`}><img src={cat.pic} width="250" height="250"></img> </NavLink> */}
                {/* <NavLink to={`/aptshow/${apartment.id}`}></NavLink> */}
                <a id="details" href={`/aptshow/${apartment.id}`}>Click Here for more Details</a>

              </div>
              
            </ListGroup>
          )
        })}
        </div>
      </>
    )
  }
}
export default ProtectedIndex