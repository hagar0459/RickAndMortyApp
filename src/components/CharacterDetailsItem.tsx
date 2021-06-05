/**
 * @flow
 * Created by Hagar Abdelghafar on 04.07.2020
 */
import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import type { CharcterDetailsType } from '../graphql/queries/requests';


type Props = {
  info: CharcterDetailsType | undefined;
};


export const CharacterDetailsItem: FC<Props> = ({ info }: Props) => {

  const renderInfoContainer = () => (
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{info?.character.name}</Text>
      <Text style={styles.gender}>{info?.character.gender}</Text>


      <Text style={styles.species}>{info?.character.species}</Text>

    </View>
  );
  const renderImage = () => {
    return (
      <Image
        style={styles.image}
        source={{ uri: info?.character.image }}
        resizeMode={'cover'}
      />
    );
  };

  const renderContent = () => {

    return (
      <>
        {renderImage()}
        {renderInfoContainer()}

      </>
    );


  };


  return (
    <View style={styles.card} >
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    borderRadius: 0,
    marginBottom: 20

  },
  image: {
    height: 150,

  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  gender: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  species: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
  },
});
