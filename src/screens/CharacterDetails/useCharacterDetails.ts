/**
 * @flow
 * Created by Hagar Abdelghafar on 05.06.2021
 */
import React, { useState, useEffect, FC } from "react";
import { useLazyQuery } from "@apollo/client";
import {
  GET_CHARACTER_DETAILS,
  CharcterDetailsType,
} from "../../graphql/queries/requests";

type Props = {
  characterId: number;
};

type Result = {
  data: CharcterDetailsType | undefined;
  getCharacterDetails(): void;
  loading: boolean;
  error: string | undefined;
};

export const useCharacterDetails = ({ characterId }: Props): Result => {
  const [getCharacterDetails, { data, error, loading }] =
    useLazyQuery<CharcterDetailsType>(GET_CHARACTER_DETAILS, {
      fetchPolicy: "cache-and-network",
      nextFetchPolicy: "cache-first",
      variables: {
        id: characterId,
      },
    });

  useEffect(() => {
    if (!loading) {
      getCharacterDetails();
    }
  }, []);

  return {
    data,
    getCharacterDetails,
    loading,
    error: error?.message,
  };
};
