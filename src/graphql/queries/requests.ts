/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */
import { gql } from '@apollo/client';
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
export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      name
      id
      image
      gender
      species
      episode {
        air_date
        name
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
export type CharcterDetailsType = {
  character: {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
    episode: Array<EpisodeType>;
  };
};
export type EpisodeType = {
  air_date: string;
  name: string;
};
