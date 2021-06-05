/**
 * @flow
 * Created by Hagar Abdelghafar on 04.07.2020
 */
import { gql } from "@apollo/client";

export const SEARCH_CHARACTER = gql`
  query SearchCharacter($page: Int!, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      results {
        name
        image
        id
      }
      info {
        next
        count
      }
    }
  }
`;

export type CharcterListType = {
  characters: {
    info: characterListInfoType;
    results: Array<CharcterResultType>;
  };
};

export type CharcterResultType = {
  id: number;
  name: string;
  image: string;
};

export type characterListInfoType = {
  next: number | null;
  count: number;
};
