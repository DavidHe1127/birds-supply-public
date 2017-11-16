import React, { Component } from 'react';
// import ListPage from './ListPage';

import { QueryRenderer, graphql } from 'react-relay';
import environment from './Environment';

const AppAllPostQuery = graphql`
  query AppAllPostQuery {
    companies {
      name
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppAllPostQuery}
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

export default App;
