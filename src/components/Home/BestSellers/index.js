import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { Grid } from 'semantic-ui-react';

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
          price: x.node.price.toLocaleString('en-au', {
            style: 'currency',
            currency: 'AUD'
          }),
          description: x.node.parrot.description,
          supplier: 'av @' + x.node.supplier.name
        }}
      />
    </Grid.Column>
  ));

  return (
    <Grid>
      <Grid.Row columns={3}>
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
            description
          }
          supplier {
            name
          }
        }
      }
    }
  `
);
