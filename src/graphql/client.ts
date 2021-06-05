/**
 * @flow
 * Created by Hagar Abdelghafar on 04.07.2020
 */
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_URL } from "../config";

export const apolloClient = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-first",
    },
  },
});
