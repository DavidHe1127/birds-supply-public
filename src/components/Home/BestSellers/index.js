import React from 'react';

import { Image, Grid, Card, Icon } from 'semantic-ui-react';

import elliot from 'images/elliot.jpg';
import { Card } from './Card';

const BestSellers = () => {
  return (
    <Grid centered>
      <Grid.Row centered columns={4}>
        <Grid.Column>
          <Card />
        </Grid.Column>
        <Grid.Column>
          <Card />
        </Grid.Column>
        <Grid.Column>
          <Card />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { BestSellers };
