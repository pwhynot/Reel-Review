import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class submitReiew extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="userName" sm={2}>Username</Label>
          <Col sm={6}>
            <Input type="name" name="userName" id="userName" placeholder="username placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="reviewTitle" sm={2}>Title</Label>
          <Col sm={6}>
            <Input type="title" name="title" id="reviewTitle" placeholder="title placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select Type of Review</Label>
          <Col sm={6}>
          <Input type="select" name="select" id="exampleSelect">
            <option>Film</option>
            <option>Television</option>
          </Input>
          </Col>
        </FormGroup>
          <FormGroup row>
          <Label for="exampleText" lg={2}>Text Area</Label>
          <Col lg={8}>
            <Input type="textarea" name="text" id="exampleText" placeholder="write review here" />
          </Col>
        </FormGroup>
          <FormGroup>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default submitReiew;