import React from 'react';

import { Image, Grid, Card, Icon } from 'semantic-ui-react';

const Product = ({name, price, descr, image}) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{price}</span>
      </Card.Meta>
      <Card.Description>
        {descr}
      </Card.Description>
    </Card.Content>
  </Card>
);

export { Product };

    // <Card.Content extra>
    //   <a>
    //     <Icon name="user" />
    //     22 Friends
    //   </a>
    // </Card.Content>
