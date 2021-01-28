import React, { Component, Fragment } from 'react'
import { Nav, NavItem, NavLink, Container } from 'reactstrap'

export class NavBar extends Component {
	render() {
		const { 
            logged_in, 
            sign_in, 
            sign_out 
        } = this.props
		return (
			<Fragment>
				<Nav>
					<NavItem>
						<NavLink href='/'>Home</NavLink>
					</NavItem>
                    
                    <NavItem>
						<NavLink href='/aptindex'>Apartments</NavLink>
					</NavItem>

					{logged_in && (
                        <>
						<NavItem>
							<NavLink href='/myapt'>My Apartments</NavLink>
						</NavItem>
						{/* <NavItem>
							<NavLink to={`/myapt`}>My Apartments</NavLink>
						</NavItem> */}
						<NavItem>
							<NavLink href='/aptnew'>Create Apartment</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/users/sign_out'>Sign Out</NavLink>
						</NavItem>
                        </>
                        
					)}
					{!logged_in && (
						<>
							<NavItem>
								<NavLink href='/users/sign_up'>Sign Up</NavLink>
							</NavItem>

							<NavItem>
								<NavLink href='/users/sign_in'>Login</NavLink>
							</NavItem>
						</>
					)}
				</Nav>
			</Fragment>
		)
	}
}

export default NavBar