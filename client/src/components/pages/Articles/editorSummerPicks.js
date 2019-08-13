import React from 'react';


import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col } from 'reactstrap';


const Home = () => {
  return (
    <div>
      <Col sm="10" >
      <Card>
        <CardImg top width="100%" imageSize="10%" src="http://images.tritondigitalcms.com/6616/sites/68/2019/01/02060034/Top-5-.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Editor's top summer picks</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>
              <ul>
                  <li><b>1. Child's Play 2019</b>- I know what you're thinking another horror remake, yes! And this one is great and a really cool reimaging of a horror classic.</li>
                  <li><b>2. Holey Moley</b>- A miniture golf tournment gameshow on ABC? Watch it I promise you'll laugh the whole time.</li>
                  <li><b>3. Lodge 49 Season 2</b>-If you haven't seen this tripped out AMC show I highly recommend it. Season 2 just premiered so currently only one episode is out but you can watch the entire first season on Hulu.  Go binge watch it next time you're searching for something new to binge. </li>
                  <li><b>4. The Boys</b>- Amazon's newest original is a must see for any superhero and comicbook fan.</li>
                  <li><b>5. Hot One's</b>- A YouTube series where guest eat hot wings sounds boring right? Wrong this is the greatest interview show on the planet, with the current season about to wrap up on Thursday August 15th it's never too late to start watching Hot One's. With an impressive 9 seasons and guest that range from Gordon Ramensy to Coolio and even Shaq you're sure to find an episode that'll get you hooked.</li>
              </ul>
          </CardText>
        </CardBody>
      </Card>
      </Col>
  </div>
  );
};

export default Home;