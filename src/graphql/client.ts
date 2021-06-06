/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */
import fetch from 'cross-fetch';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { GRAPHQL_URL } from '../config';
export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: GRAPHQL_URL, fetch }),
  cache: new InMemoryCache({
    //uncomment when useCharacterListWithFetchMore but currently facing issue
    // typePolicies: {
    //   Query: {
    //     fields: {
    //       characters: {
    //         merge(existing, incoming, { args }) {
    //           debugger;
    //           if (existing === undefined) {
    //             //for initial messages
    //             return incoming;
    //           }
    //           debugger;
    //           if (existing.results) {
    //             debugger;
    //             let d = Object.assign({}, incoming, {
    //               results: [...existing.results, ...incoming.results],
    //             });
    //             debugger;
    //             return d;
    //           } else {
    //             debugger;
    //             return incoming;
    //           }
    //         },
    //       },
    //     },
    //   },
    // },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  },
});
