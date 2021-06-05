/**
 * @flow
 * Created by Hagar Abdelghafar on 05.06.2021
 */
import React, { FC } from 'react';
import { StyleSheet, FlatList, ListRenderItemInfo, Text, Alert } from 'react-native';
import { CharacterDetailsItem } from '../../components/CharacterDetailsItem';
import { EpisodInfoItem } from '../../components/EpisodInfoItem';
import { EpisodeType, CharcterDetailsType } from '../../graphql/queries/requests';

import { useCharacterDetails } from './useCharacterDetails';
import {
  CharacterDetailscreenRouteProp,
} from '../../Navigation';

type CharactersDetailsScreenProps = {
  route: CharacterDetailscreenRouteProp;
};


export const CharacterDetailsScreen: FC<CharactersDetailsScreenProps> = ({ route }: CharactersDetailsScreenProps) => {

  const { characterId } = route.params;
  debugger;

  const { loading, data, error } = useCharacterDetails({
    characterId: characterId,

  });




  if (error) {
    Alert.alert(error)
  }

  const renderEpisod = ({ item }: ListRenderItemInfo<EpisodeType>) => {

    return (
      <EpisodInfoItem info={item} />
    );
  }

  return (
    <>

      <CharacterDetailsItem
        info={data}
      ></CharacterDetailsItem>
      <Text style={{ marginHorizontal: 20, fontSize: 16, fontWeight: '600' }}>Episods:</Text>
      <FlatList
        numColumns={2}
        data={data?.character.episode}
        keyExtractor={({ name }) => name}
        renderItem={renderEpisod}
      />


    </>
  );
}

const styles = StyleSheet.create({
  commentsContainer: {
    padding: 8,
  },
  commentCard: {
    padding: 16,
    marginVertical: 8,
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  name: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 8,
  },
  air_date: {
    fontSize: 12,
    fontWeight: '200',
    color: '#787878',
  },
});

