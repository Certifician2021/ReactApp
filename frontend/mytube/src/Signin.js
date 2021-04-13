import React from 'react'
import './Signup.css'
import {Button, Form, FormGroup, FormLabel, FormControl, FormText, FormCheck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Signin() {
    return (
        <div className="signup">
             <Form>
  <FormGroup controlId="formBasicEmail">
    <FormLabel>Email address</FormLabel>
    <FormControl type="email" placeholder="Enter email" />
    <FormText className="text-muted">
      We'll never share your email with anyone else.
    </FormText>
  </FormGroup>

  <FormGroup controlId="formBasicPassword">
    <FormLabel>Password</FormLabel>
    <FormControl type="password" placeholder="Password" />
  </FormGroup>
  <FormGroup controlId="formBasicCheckbox">
    <FormCheck type="checkbox" label="Check me out" />
  </FormGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default Signin