// import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Button } from 'reactstrap'

// class ApartmentIndex extends Component{
//   render(){
//     return(
//       <React.Fragment>
//       <h3>All the Apartments</h3>
//         { this.props.apartments && this.props.apartments.map((apartment, index) => {
//           return (
//             <div>
//               <h5>{ apartment.street }</h5>
//               <h5>{ apartment.city }</h5>
//               <h5>{ apartment.state }</h5>
//               <p>
//                 <NavLink to={`/aptshow/${apartment.id}`}>
//                   <Button color="secondary">
//                     More Info
//                   </Button>
//                 </NavLink>
//               </p>
//             </div>
//           )
//         })}
//       </React.Fragment>
//     )
//   }
// }
// export default ApartmentIndex

import React, { Component } from 'react';
import { ListGroup, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
// import Footer from '../components/Footer'



class ApartmentIndex extends Component {
    render() {
        return (

          <>
        <div className="cats-display-wrapper">


        { this.props.apartments && this.props.apartments.map((apartment, index) => {
          return(
            <ListGroup key={index} className="cat-wrapper">
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
                <ListGroupItemText>ID: { apartment.id } </ListGroupItemText>



                


                <NavLink to={`/aptshow/${apartment.id}`} id="details">Click For More Details!</NavLink>
                {/* <a id="details" href={`/aptshow/${apartment.id}`}>Click Here for more Details</a> */}

              </div>
              
            </ListGroup>
          )
        })}

        </div>
      {/* </div> */}
    </>
        );
    }
}

export default ApartmentIndex;