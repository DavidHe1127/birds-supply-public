import React from 'react';
import Slick from 'react-slick';

const images = window.importAll(require.context('images/birds', false, /\.jpg$/));

const Carousel = () => {
  const slides = images.map((s, i) => {
    const style = {
      height: 730,
      background: `url(${s})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%'
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
