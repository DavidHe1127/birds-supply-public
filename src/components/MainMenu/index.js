import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';

const MainMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Our Birds</Menu.Item>
      <Menu.Item as="a">Events</Menu.Item>
      <Menu.Item as="a">Contact us</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export { MainMenu };
