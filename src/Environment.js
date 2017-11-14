import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('https://api.graph.cool/relay/v1/cj857z0r40moo0150xszdlk7z', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(res => {
    return res.json();
  });
});

const environment = new Environment({
  network,
  store
});

export default environment;
