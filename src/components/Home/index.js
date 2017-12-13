import React, { Component } from 'react';
import {
  Segment,
  Visibility,
  Header,
  Divider
} from 'semantic-ui-react';
import styled from 'styled-components';

import { MainMenu } from 'components/Home/MainMenu';
import { Carousel } from 'components/Home/Carousel';
import BestSellers from 'components/Home/BestSellers';
import Testimonials from 'components/Home/Testimonials';
import Footer from 'components/Home/Footer';

const Wrapper = styled.div`
  margin: 20px;
`;

export default class Home extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <MainMenu.Fixed /> : null}
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ height: 800, padding: '1em 0em' }}
            vertical
          >
            <MainMenu.Floating />
            <Carousel />
          </Segment>
        </Visibility>
        <Divider hidden />
        <Divider horizontal>
          <Header size="large" textAlign="center">
            Our Best Sellers
          </Header>
        </Divider>
        <Wrapper>
          <BestSellers bestSellers={this.props.bestSellers} />
        </Wrapper>
        <Divider horizontal>
          <Header size="large" textAlign="center">
            What our customers say...
          </Header>
        </Divider>
        <Wrapper>
          <Testimonials />
        </Wrapper>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Footer />
        </Segment>
      </div>
    );
  }
}