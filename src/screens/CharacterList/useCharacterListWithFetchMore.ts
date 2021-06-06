/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */
import { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import {
  SEARCH_CHARACTER,
  CharcterListType,
  CharcterResultType,
} from '../../graphql/queries/requests';

type Props = {
  searchTxt: String;
  pageNumber: number;
};

type Result = {
  characters: Array<CharcterResultType>;
  getCharactersList(): void;
  loading: boolean;
  loadMore(): void;
  error: string | undefined;
};

export const useCharacterListWithFetchMore = ({
  searchTxt,
  pageNumber,
}: Props): Result => {
  const [characters, setcharacters] = useState<CharcterResultType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [getCharactersList, { data, error, loading, fetchMore }] =
    useLazyQuery<CharcterListType>(SEARCH_CHARACTER, {
      variables: {
        page: currentPage,
        name: searchTxt,
      },
    });

  useEffect(() => {
    if (!loading) {
      getCharactersList();
      // return () => {
      //   unsubscribe();
      // };
    }
  }, [currentPage, getCharactersList]);

  useEffect(() => {
    if (data?.characters?.results && currentPage === 1) {
      setcharacters(data?.characters?.results);
    } else if (
      data?.characters?.results &&
      data?.characters.info.next !== null
    ) {
      setcharacters([...characters, ...data?.characters?.results]);
    }
  }, [data]);

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [searchTxt]);

  const loadMore = () => {
    pageNumber++;
    debugger;
    if (data?.characters?.info?.next)
      fetchMore({
        variables: {
          page: pageNumber,
          name: searchTxt,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          const subscriptionResponse = fetchMoreResult.characters.results;

          const newCache = Object.assign({}, prev, {
            characters: {
              results: [subscriptionResponse, ...prev.characters.results],
            },
          });

          return newCache;

          // if (!fetchMoreResult) return prev;
          // return (fetchMoreResult.characters.results = [
          //   ...prev.characters.results,
          //   ...fetchMoreResult.characters.results,
          // ]);
        },
      });
  };

  return {
    characters,
    getCharactersList,
    loading,
    loadMore,
    error: error?.message,
  };
};
