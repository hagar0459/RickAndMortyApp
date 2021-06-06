/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */
import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  SEARCH_CHARACTER,
  CharcterListType,
  CharcterResultType,
} from "../../graphql/queries/requests";
import { Alert } from "react-native";

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

export const useCharacterList = ({ searchTxt, pageNumber }: Props): Result => {
  const [characters, setcharacters] = useState<CharcterResultType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [getCharactersList, { data, error, loading }] =
    useLazyQuery<CharcterListType>(SEARCH_CHARACTER, {
      variables: {
        page: currentPage,
        name: searchTxt,
      },
    });

  useEffect(() => {
    if (!loading) {
      getCharactersList();
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
    if (loading) {
      return;
    } else if (data) {
      if (characters.length < data?.characters?.info?.count) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  return {
    characters,
    getCharactersList,
    loading,
    loadMore,
    error: error?.message,
  };
};
