import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

render(<ApolloProvider client={client}><Popup /></ApolloProvider>, window.document.querySelector('#app-container'));

// if (module.hot) module.hot.accept();
