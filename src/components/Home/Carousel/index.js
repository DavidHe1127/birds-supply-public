import React from 'react';
import Slick from 'react-slick';
import { Image } from 'semantic-ui-react';

import gold_blue_macaw from 'images/gold_blue_macaw.jpg';
import sulphur_crested_cockatoo from 'images/sulphur_crested_cockatoo.jpg';
import military_macaw from 'images/military_macaw.jpg';
import scarlet_macaw from 'images/scarlet_macaw.jpg';
import galah from 'images/galah.jpg';

const Carousel = () => {
  const slides = [
    gold_blue_macaw,
    sulphur_crested_cockatoo,
    military_macaw,
    scarlet_macaw,
    galah
  ].map((s, i) => {
    const style = {
      height: 730,
      background: `url(${s})`,
      'background-repeat': 'no-repeat',
      'background-position': '50% 50%'
    };
    return <div style={style} key={i} />;
  });

  return (
    <Slick arrows={false} dots>
      {slides}
    </Slick>
  );
};

export { Carousel };
