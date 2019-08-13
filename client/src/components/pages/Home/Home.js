import React from 'react';
import { Media } from 'reactstrap';


const Home = () => {
  return (
    <div>
      <Media>
        <Media left top href="/review">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Creator's Welcome note
          </Media>
          Welcome to Reel Review, the site dedicated to film and tv buffs looking for a place to share their opinions on their favorite films and television shows.
        </Media>
      </Media>
        <Media className="mt-5">
        <Media left middle href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Editor's Top summer picks!
          </Media>
          Checkout our in house editor's top picks for summer shows and movies, click this link to read the full article. Have you seen any of these films or shows, let us know down in the comments and tell us what your top summer picks are!
        </Media>
      </Media>
      <Media className="mt-5">
        <Media left bottom href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            IT Chapter 2 Trailer
          </Media>
          Have you seen the newest trailer for IT Chapter 2? Read what our site creator has to say about it and find out why he's exictied for the premiere.
        </Media>
      </Media>
    </div>
  );
};

export default Home;