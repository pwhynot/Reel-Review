import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';


const Example = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <CardTitle>Latest Reviews</CardTitle>
          <CardText>Check out the latest reviews from our users.</CardText>
          <Button>Go to User Reviews!</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;