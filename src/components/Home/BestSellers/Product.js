import React from 'react';

import { Image, Card } from 'semantic-ui-react';

import styled from 'styled-components';

const Price = styled.span`
  font-weight: bold;
  font-style: oblique;
  color: brown;
`;

const Supplier = styled.span`
  font-weight: bold;
  font-style: oblique;
  color: #2e86c1;
  float: right;
`;

const Product = ({name, price, description, supplier, image}) => (
  <Card centered>
    <Image src={image} />
    <Card.Content>
      <Card.Header textAlign="center">{name}</Card.Header>
      <Card.Meta>
        <Price>{price}</Price>
        <Supplier>{supplier}</Supplier>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

export { Product };
