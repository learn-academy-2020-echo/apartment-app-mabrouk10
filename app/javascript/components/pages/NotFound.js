import React, { Component } from 'react'

const NotFound = () => {
  return (
    <>
      <h3>Ooops!</h3>
    </>
  )
}
export default NotFound

// import React, { Component } from 'react';

// // importing the image and  referencing as a JSX
// import notfoundcat from '../assets/notfoundcat.jpg'




// class NotFound extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Not Found Page</h1>
//                 <img src ={ notfoundcat} />

//                 <img src ='/assets/notfoundcat.jpg' />
//             </div>
//         );
//     }
// }

// export default NotFound;

{/* <Route
exact path={'/aptshow/:id'}
render={ (props) => {
  let id = props.match.params.id
  console.log("id", id)
  console.log("state", this.state.apartments)
  let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
  console.log("apartment",apartment)
  console.log("apartment id", apartment.id)
  return (
    <ApartmentShow apartment={ apartment }
    deleteCat={ this.deleteCat}
    />
  )
}}
/> */}