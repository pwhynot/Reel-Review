import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

 class submitReiew extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="userName" sm={2}>UserName</Label>
          <Col sm={10}>
            <Input type="name" name="userName" id="userName" placeholder="with a placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="reviewTitle" sm={2}>Title</Label>
          <Col sm={10}>
            <Input type="title" name="title" id="reviewTitle" placeholder="password placeholder" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>Select</Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" placeholder="Film or TV" />
          </Col>
        </FormGroup>
          <FormGroup row>
          <Label for="exampleText" lg={2}>Text Area</Label>
          <Col lg={10}>
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