import React from 'react'
import { Grid, Image, Container } from 'semantic-ui-react';

// import buyer from './buyer.svg'
// <Image src={buyer} size="small" />

const Testimonial = () => (
  <Grid>
    <Grid.Row columns={3}>
      <Grid.Column>
        <Container>
          <span>this is a test </span>
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Container>
          <span>this is a test </span>
        </Container>
      </Grid.Column>
      <Grid.Column>
        <Container>
          <span>this is a test </span>
        </Container>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default Testimonial;
