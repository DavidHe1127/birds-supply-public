import React, { Component } from 'react';

import { Segment, Visibility, Header } from 'semantic-ui-react';
import styled from 'styled-components';

import { MainMenu } from 'components/Home/MainMenu';
import { Carousel } from 'components/Home/Carousel';
import BestSellers from 'components/Home/BestSellers';
import Testimonials from 'components/Home/Testimonials';

import './index.css';

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
        <Wrapper>
          <BestSellers bestSellers={this.props.bestSellers} />
        </Wrapper>
        <Wrapper>
          <Header size="large" textAlign="center">What our customers say...</Header>
        </Wrapper>
        <Wrapper>
          <Testimonials />
        </Wrapper>
      </div>
    );
  }
}