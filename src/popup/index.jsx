/* eslint-disable no-undef */
import React from 'react';
import { render } from 'react-dom';
import Popup from './Popup';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    HttpLink,
    from,
  } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { onError } from "@apollo/client/link/error";



const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql' })

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: from([errorLink, httpLink]),
  });

render(
<ApolloProvider client={client}>
  <BrowserRouter>
    <Popup />
  </BrowserRouter>
  </ApolloProvider>
  , window.document.querySelector('#app-container'));

// if (module.hot) module.hot.accept();
