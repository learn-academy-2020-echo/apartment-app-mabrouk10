import React, { Component } from 'react';
import { Form,  FormGroup,  Input, Label, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'



class EditApartment extends Component {

    constructor(props){
        super(props)
        this.state = {
          form:{
            street: '',
            city: '',
            state: '',
            manager: '',
            email: '',
            price: '',
            bedrooms: '',
            bathrooms: '',
            pets: '',
            pic: ''
          },
          success: false
        }
      }
      

      handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      } 

      handleSubmit = (e) => {
        // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        // a function call being passed from App.js
        this.props.updateApt(this.state.form, this.props.apartment.id)
        this.setState({ success: true })

      }
    

    render() {
        return (
            <div className = "cat-edit">
                <Form>
                <FormGroup>
                    <Label id= "label">Street</Label>
                    <Input
                    type="text"
                    name="street"
                    onChange={ this.handleChange }
                    value={ this.state.form.street }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">City</Label>
                    <Input
                    type="text"
                    name="city"
                    onChange={ this.handleChange }
                    value={ this.state.form.city }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">State</Label>
                    <Input
                    type="text"
                    name="state"
                    onChange={ this.handleChange }
                    value={ this.state.form.state }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Manager</Label>
                    <Input
                    type="text"
                    name="manager"
                    onChange={ this.handleChange }
                    value={ this.state.form.manager }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Email</Label>
                    <Input
                    type="text"
                    name="email"
                    onChange={ this.handleChange }
                    value={ this.state.form.email }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Price</Label>
                    <Input
                    type="text"
                    name="price"
                    onChange={ this.handleChange }
                    value={ this.state.form.price }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Bedrooms</Label>
                    <Input
                    type="text"
                    name="bedrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bedrooms }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Bathrooms</Label>
                    <Input
                    type="text"
                    name="bathrooms"
                    onChange={ this.handleChange }
                    value={ this.state.form.bathrooms }
                    />
                </FormGroup>
                <FormGroup>
                    <Label id= "label">Pets</Label>
                    <Input
                    type="text"
                    name="pets"
                    onChange={ this.handleChange }
                    value={ this.state.form.pets }
                    />
                </FormGroup>
                </Form>    

                <Button
                    name="submit"
                    color="secondary"
                    onClick={ this.handleSubmit }
                    >
                    Edit Apartment Profile
                </Button>       

             { this.state.success && <Redirect to={ `/aptshow/${this.props.apartment.id}` }/> }

         </div>
        );
    }
}

export default EditApartment;