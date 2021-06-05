
/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */

import React, { FC, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, SafeAreaView, TextInput, View, ListRenderItemInfo, Alert } from 'react-native';
import { CharcterResultType } from '../../graphql/queries/requests';
import { CharacterListItem } from '../../components/CharacterListItem';

import {
  CharacterListScreenNavigationProp,NAVIGATION_CHARACTERS_DETAILS_ROUTE
} from '../../Navigation';
import { useCharacterList } from './useCharacterList';

type CharactersListScreenProps = {
  navigation: CharacterListScreenNavigationProp;
};

export const CharactersListScreen: FC<CharactersListScreenProps> = ({ navigation }: CharactersListScreenProps) => {

  const [searchTxt, setsearchTxt] = useState("")
  const { loading, characters, loadMore, error } = useCharacterList({
    searchTxt: searchTxt,
    pageNumber: 1,
  });

  if (error) {
    if (!characters) {
      Alert.alert(error)
    }
  }


  const footerComponent = () => {
    if (loading && characters.length !== 0) {
      return (
        <View style={{ height: 20 }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return null;
  };


  const renderCharacter = ({ item, index }: ListRenderItemInfo<CharcterResultType>) => {
    return (
      <CharacterListItem
        info={item}
        onPress={() => {

          navigation.navigate(NAVIGATION_CHARACTERS_DETAILS_ROUTE, {
            characterId: item.id,
            title:item.name
          });
        }}
        index={index}
      />
    );
  }


  return (
    <SafeAreaView >

      <View style={{ height: 60, width: '100%', backgroundColor: 'white' }}>


        <TextInput
          style={styles.input}
          placeholder="search..."
          onChangeText={(text) => {
            setsearchTxt(text)
          }}
          autoCorrect={false}
          value={searchTxt}
        />

      </View>

      <FlatList
        keyboardShouldPersistTaps="never"
        style={styles.charctersList}
        contentContainerStyle={styles.charctersListContainer}
        data={characters}
        keyExtractor={item => '' + item.id}
        renderItem={renderCharacter}
        onEndReached={loadMore}
        ListFooterComponent={footerComponent}
      />


    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  charctersList: {
    backgroundColor: '#fafafa',
  },
  charctersListContainer: {
    backgroundColor: '#fafafa',
    paddingVertical: 8,
    marginHorizontal: 8,

  },
  input: {
    flex: 1
    , marginTop: 10,
    fontSize: 18,
    paddingHorizontal: 10,
    backgroundColor: '#dcdcdc',
    borderRadius: 10,
    marginBottom: 10,
    width: '90%', marginHorizontal: '5%',
  },

});
