import React from 'react';
import { Button, Menu, Container } from 'semantic-ui-react';

import items from './items';

const MenuItems = () =>
  Object.keys(items).map((k, i) => <Menu.Item {...items[k]} key={i}>{k}</Menu.Item>);

const Fixed = () => (
  <Menu fixed="top" size="large">
    <Container>
      <MenuItems />
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

const Floating = () => (
  <Container>
    <Menu inverted pointing secondary size="large">
      <MenuItems />
      <Menu.Item position="right">
        <Button as="a" inverted>
          Log in
        </Button>
        <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Menu>
  </Container>
);

const MainMenu = {
  Fixed,
  Floating
};

export { MainMenu };
