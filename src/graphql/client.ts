/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
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
