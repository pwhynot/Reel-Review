import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, Col } from 'reactstrap';


const itChapter2 = () => {
  return (
    <div>
      <Col sm="12" >
      <Card>
        <CardImg top width="100%" imageSize="10%" src="https://ewedit.files.wordpress.com/2019/05/it2-trlr-0002.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>IT Chapter 2 Trailer</CardTitle>
          <CardLink href="https://www.youtube.com/watch?v=xhJ5P7Up3jA" target="blank">Click here to watch it</CardLink>
          <CardSubtitle></CardSubtitle>
          <CardText>The final trailer for IT Chapter 2 dropped a few weeks ago and it looks amazing. With all the horror remakes that have flopped over the years, IT is one of the few that exceeded expectations. This second and final installment of the film promises to be scarier, longer and even more bloody. Click the link above and go watch the trailer if you haven't.</CardText>
        </CardBody>
      </Card>
      </Col>
      
       
    </div>
  );
};

export default itChapter2;