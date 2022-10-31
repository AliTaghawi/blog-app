import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ApolloClient , ApolloProvider , InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.hygraph.com/v2/cl9tac2dm2saa01uf9mgj8lis/master', 
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
