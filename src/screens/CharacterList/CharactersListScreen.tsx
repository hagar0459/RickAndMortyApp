
/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */

import React, { FC, useState,useRef } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, SafeAreaView, TextInput, View, ListRenderItemInfo, Alert, Dimensions, Text } from 'react-native';
import { CharcterResultType } from '../../graphql/queries/requests';
import { CharacterListItem } from '../../components/CharacterListItem';

import {
  NAVIGATION_CHARACTERS_DETAILS_ROUTE
} from '../../Navigation';
import { useNavigation } from '@react-navigation/native';

import { useCharacterList } from './useCharacterList';



export const CharactersListScreen: FC= () => {
  let  FlatListref=useRef;

  const [searchTxt, setsearchTxt] = useState("")
  const { loading, characters, loadMore, error } = useCharacterList({
    searchTxt: searchTxt,
    pageNumber: 1,
  });

  const navigation = useNavigation();

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


  const listEmptyComponent = () => {
    if (!loading && characters.length === 0) {
      return (
        <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
          <Text style={{textAlign:'center'}}> No Characters Found !!!</Text> 
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
            FlatListref.scrollToOffset({offest: 0,animated:true});
            setsearchTxt(text)

          }}
          autoCorrect={false}
          value={searchTxt}
        />

      </View>

      <FlatList
        keyboardShouldPersistTaps="never"
        ref={(ref)=>{FlatListref=ref}}
        style={styles.charctersList}
        contentContainerStyle={styles.charctersListContainer}
        data={characters}
        keyExtractor={item => '' + item.id}
        renderItem={renderCharacter}
        onEndReached={loadMore}
        ListFooterComponent={footerComponent}
        ListEmptyComponent={listEmptyComponent}

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
