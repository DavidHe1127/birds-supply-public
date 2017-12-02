import React from 'react';
import Slick from 'react-slick';
import { Image } from 'semantic-ui-react';

import gold_blue_macaw from 'images/gold_blue_macaw.jpg';
import sulphur_crested_cockatoo from 'images/sulphur_crested_cockatoo.jpg';
import military_macaw from 'images/military_macaw.jpg';
import scarlet_macaw from 'images/scarlet_macaw.jpg';
import galah from 'images/galah.jpg';

const Carousel = () => (
  <div className="wrapper">
    <Slick arrows={false} dots>
      <div>
        <Image src={gold_blue_macaw} />
      </div>
      <div>
        <Image src={hyacinth_macaw} />
      </div>
      <div>
        <Image src={military_macaw} />
      </div>
      <div>
        <Image src={scarlet_macaw} />
      </div>
      <div>
        <Image src={galah} />
      </div>
    </Slick>
  </div>
);

export { Carousel };
