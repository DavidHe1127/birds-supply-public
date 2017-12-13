import React, { Component } from 'react';

import { QueryRenderer, graphql } from 'react-relay';

import environment from './Environment';
import './App.css';

import Home from 'components/Home';

const homeQuery = graphql`
  query AppQuery {
    bestSellers {
      ...BestSellers_bestSellers
    }
  }
`;

export default class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={homeQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <Home {...props} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}
