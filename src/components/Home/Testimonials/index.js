import React from 'react';
import { Grid, Item } from 'semantic-ui-react';
import styled from 'styled-components';

import seeds from 'seeds/testimonials.json';

const images = window.importAll(require.context('images', false, /\.svg$/));

const Feedback = styled.p`
  font-style: oblique;
`;

const Testimonial = () => {
  const testimonials = seeds.map((x, i) => (
    <Grid.Column>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={images[i]} />
          <Item.Content>
            <Item.Meta><Feedback>{`"${x.testimonial}"`}</Feedback></Item.Meta>
            <Item.Description>{x.name}</Item.Description>
            <Item.Extra>{x.area}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Grid.Column>
  ));

  return (
    <Grid>
      <Grid.Row columns={3}>{testimonials}</Grid.Row>
    </Grid>
  );
};

export default Testimonial;
