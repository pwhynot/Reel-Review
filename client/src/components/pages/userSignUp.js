import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class userSignUp extends Component {
    render() {
        return (
            <div>
                <h2>Sign Up today and be entered for a chance to win 2 free movie tickets!</h2>
        <Form>
        <FormGroup row>
          <Label for="userName" sm={2}>Create a Username</Label>
          <Col sm={6}>
            <Input type="name" name="userName" id="userName" placeholder="username placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="password" sm={2}>Create a password</Label>
          <Col sm={6}>
            <Input type="passwrod" name="password" id="password" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}>Email you wish to sign up with</Label>
          <Col sm={6}>
            <Input type="email" name="email-name" id="email" placeholder="email placeholder" />
          </Col>
        </FormGroup>
          
          <FormGroup>
          <Col sm={{ size: 8, offset: 2 }}>
            <Button>Create Account</Button>
          </Col>
        </FormGroup>
      </Form>
            </div>
        )
    }
}

export default userSignUp;