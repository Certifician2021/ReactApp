import React from 'react'
import './Signup.css'
import {Button, Form, FormGroup, FormLabel, FormControl, FormCheck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signup() {
    return (
        <div className="signup">
        <center><h3>Please Sign-Up For Registration!!</h3></center>
        <Form>
    <FormGroup controlId="formGridEmail">
      <FormLabel>Email</FormLabel>
      <FormControl type="email" placeholder="Enter email" />
    </FormGroup>

    <FormGroup  controlId="formGridPassword">
      <FormLabel>Password</FormLabel>
      <FormControl type="password" placeholder="Password" />
    </FormGroup>
  

  <FormGroup controlId="formGridAddress1">
    <FormLabel>Address</FormLabel>
    <FormControl placeholder="1234 Main St" />
  </FormGroup>

  <FormGroup controlId="formGridAddress2">
    <FormLabel>Address 2</FormLabel>
    <FormControl placeholder="Apartment, studio, or floor" />
  </FormGroup>

  
    <FormGroup  controlId="formGridCity">
      <FormLabel>City</FormLabel>
      <FormControl />
    </FormGroup>

    <FormGroup  controlId="formGridState">
      <FormLabel>State</FormLabel>
      <FormControl as="select" defaultValue="Choose">
        <option>Choose</option>
        <option></option>
      </FormControl>
    </FormGroup>

    <FormGroup  controlId="formGridZip">
      <FormLabel>Zip</FormLabel>
      <FormControl />
    </FormGroup>
  

  <FormGroup id="formGridCheckbox">
    <FormCheck type="checkbox" label="Check me out" />
  </FormGroup>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Signup
