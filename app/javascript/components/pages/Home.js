import React, { Component } from 'react'
import { Container, Button } from 'reactstrap'
import aptcollage from '../assets/aptcollage.jpg'

export class Home extends Component {
	render() {
		return (
      // <div className = "bg">
			// 	{/* <h1 className = "h1">Apartment App</h1> */}

      //     {/* <h1 className='homeh1'>This is home</h1> */}
      //     <img src ={ aptcollage } />

      //     </div>  

      // <div className="container">
      // <img src ={ aptcollage }/>
      //   <div className="centered">Centered</div>
      // </div>

      <header className='home-header'>
        <h1 className='home-h1'>Apartment App!</h1>
      </header>

		)
	}
}

export default Home