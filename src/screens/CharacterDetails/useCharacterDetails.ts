/**
 * @flow
 * Created by Hagar Abdelghafar on 05.06.2021
 */
import { useQuery } from '@apollo/client';
import {
  GET_CHARACTER_DETAILS,
  CharcterDetailsType,
} from '../../graphql/queries/requests';
type Props = {
  characterId: number;
};
type Result = {
  data: CharcterDetailsType | undefined;
  loading: boolean;
  error: string | undefined;
};

export const useCharacterDetails = ({ characterId }: Props): Result => {
  const { data, error, loading } = useQuery<CharcterDetailsType>(
    GET_CHARACTER_DETAILS,
    {
      variables: {
        id: characterId,
      },
    }
  );

  return {
    data,
    loading,
    error: error?.message,
  };
};
