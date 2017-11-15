import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime';

const store = new Store(new RecordSource());

const network = Network.create((operation, variables) => {
  return fetch('http://127.0.0.1:4000/graphql', {
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
