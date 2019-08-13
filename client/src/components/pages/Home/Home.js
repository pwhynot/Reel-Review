import React from 'react';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink } from 'reactstrap';


const Home = () => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" imgSize="50%" src="http://www.ashartex.com/wp-content/uploads/2016/12/welcome-images-25.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Creator's Welcome Note</CardTitle>
          <CardLink href="/welcomeNote">Click here to read it</CardLink>
          <CardSubtitle></CardSubtitle>
          <CardText>Welcome to the brand new Film and Television review site Reel Review, where everyday people get the chance to have their opinions heard over the professional critics.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" imageSize="10%" src="http://images.tritondigitalcms.com/6616/sites/68/2019/01/02060034/Top-5-.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Editor's top summer picks</CardTitle>
          <CardLink href="/editorSummerPicks">Click here to read it</CardLink>
          <CardSubtitle></CardSubtitle>
          <CardText>Checkout our in house editor's top picks for summer shows and movies, click this link to read the full article.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" imageSize="10%" src="https://ewedit.files.wordpress.com/2019/05/it2-trlr-0002.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>IT Chapter 2 Trailer</CardTitle>
          <CardLink href="/itChapter2">Click here to watch it</CardLink>
          <CardSubtitle></CardSubtitle>
          <CardText>Have you seen the newest trailer for IT Chapter 2? If not it's definitley a must watch, don't worry it doesn't give away much more than we already know. Our staff is super pumped for this movie to premiere how about you?</CardText>
        </CardBody>
      </Card>
       
    </div>
  );
};

export default Home;