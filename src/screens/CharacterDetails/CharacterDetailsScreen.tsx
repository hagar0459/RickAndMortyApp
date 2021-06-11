/**
 * @flow
 * Created by Hagar Abdelghafar on 05.06.2021
 */
import React, { FC } from 'react';
import
{
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  Text,
  Alert,
  SafeAreaView,
} from 'react-native';
import { CharacterDetailsItem } from '../../components/CharacterDetailsItem';
import { EpisodInfoItem } from '../../components/EpisodInfoItem';
import { EpisodeType } from '../../graphql/queries/requests';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useCharacterDetails } from './useCharacterDetails';
import { RootStackParamList } from './../../Navigation'
type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'NAVIGATION_CHARACTERS_DETAILS_ROUTE'>;

export const CharacterDetailsScreen: FC = () =>
{
  const route = useRoute<ProfileScreenRouteProp>();
  const { data, error } = useCharacterDetails( {
    characterId: route?.params?.characterId
  } );
  if ( error )
  {
    Alert.alert( error );
  }
  const renderEpisod = ( { item }: ListRenderItemInfo<EpisodeType> ) =>
  {
    return <EpisodInfoItem info={item} />;
  };

  return (
    <SafeAreaView>
      <CharacterDetailsItem info={data}></CharacterDetailsItem>
      {!error && (
        <Text style={{ marginHorizontal: 20, fontSize: 16, fontWeight: '600' }}>
          Episods:
        </Text>
      )}
      <FlatList
        numColumns={2}
        data={data?.character.episode}
        keyExtractor={( { name } ) => name}
        renderItem={renderEpisod}
      />
    </SafeAreaView>
  );
};
