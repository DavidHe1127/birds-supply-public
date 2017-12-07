import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Image, Grid, Icon } from 'semantic-ui-react';

import { Product } from './Product';
import elliot from 'images/elliot.jpg';

const data = [
  {
    image: elliot,
    name: 'A',
    price: '14.00',
    descr: 'This bird is awesome'
  },
  {
    image: elliot,
    name: 'B',
    price: '25.00',
    descr: 'This bird is great'
  },
  {
    image: elliot,
    name: 'C',
    price: '41.00',
    descr: 'This bird is nice'
  }
];

const BestSellers = (props) => {
  console.log('bestSellers', props.bestSellers)
  const cols = data.map(x => (
    <Grid.Column>
      <Product {...x} />
    </Grid.Column>
  ));

  return (
    <Grid centered>
      <Grid.Row centered columns={4}>
        cols
      </Grid.Row>
    </Grid>
  );
};

export default createFragmentContainer(
  BestSellers,
  graphql`
    fragment BestSellers_bestSellers on ProductConnection {
      edges {
        node {
          id
          price
          parrot {
            id
            name
          }
        }
      }
    }
  `
);
