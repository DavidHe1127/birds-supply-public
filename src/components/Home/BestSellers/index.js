import React from 'react';

import { Image, Grid, Card, Icon } from 'semantic-ui-react';

import elliot from 'images/elliot.jpg';

const BestSellers = () => {
  return (
    <Grid centered>
      <Grid.Row centered columns={4}>
        <Grid.Column>
          <CardExampleCard />
        </Grid.Column>
        <Grid.Column>
          <CardExampleCard />
        </Grid.Column>
        <Grid.Column>
          <CardExampleCard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const CardExampleCard = () => (
  <Card>
    <Image src={elliot} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export { BestSellers };
