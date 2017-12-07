import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Image, Grid, Icon } from 'semantic-ui-react';

import { Product } from './Product';
import elliot from 'images/elliot.jpg';

const BestSellers = ({ bestSellers }) => {
  const { edges } = bestSellers;

  const cols = edges.map(x => (
    <Grid.Column key={x.node.id}>
      <Product
        {...{
          image: elliot,
          name: x.node.parrot.name,
          price: x.node.price,
          descr: 'This bird is awesome'
        }}
      />
    </Grid.Column>
  ));

  return (
    <Grid centered>
      <Grid.Row centered columns={4}>
        {cols}
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