
/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */

import React, { FC } from 'react';
import { ApolloProvider } from '@apollo/client';

import { Navigation } from './Navigation';
import { apolloClient } from './graphql/client';

const App: FC = () => {


  return (
    <ApolloProvider client={apolloClient}>

      <Navigation />

  </ApolloProvider>

  );
};

export default App;
