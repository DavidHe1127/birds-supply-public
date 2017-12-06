import React, { Component } from 'react';
// import './App.css';

import { QueryRenderer, graphql } from 'react-relay';
import environment from './Environment';

import { Segment, Visibility } from 'semantic-ui-react';

import { MainMenu } from 'components/Home/MainMenu';
import { Carousel } from 'components/Home/Carousel';
import { BestSellers } from 'components/Home/BestSellers';

const bestSellers = graphql`
  query bestSellers {
    bestSellers
  }
`;

export default class App extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <QueryRenderer
        environment={environment}
        query={bestSellers}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <ul>
                {props.companies.map((x, i) => <li key={i}>{x.name}</li>)}
              </ul>
            );
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

/*
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
        <Segment>
          <BestSellers />
        </Segment>
      </div>

      */