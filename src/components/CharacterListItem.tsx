/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */
import React, { FC } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { CharcterResultType } from '../graphql/queries/requests';


type Props = {
  info: CharcterResultType;
  onPress(item: CharcterResultType): void;
  index: number;
};
const ITEM_HEIGHT = 80;

export const CharacterListItem: FC<Props> = ({ info, onPress, index }: Props) => {

  const renderText = () => (
    <View  >
      <Text style={styles.title}>{info.name}</Text>
    </View>
  );
  const renderImage = (isRight: boolean) => {
    const rawUri = info.image;
    if (!rawUri) {
      return null;
    }
    const uri = `${rawUri ?? ''}?width=300`;
    // console.log({ uri });
    return (
      <View style={isRight ? styles.right : styles.left}>
        <Image source={{ uri }} resizeMode="cover" style={styles.image} />
      </View>
    );
  };

  const renderContent = () => {
    const isRight = index % 2 === 0;
    if (isRight) {
      return (
        <>
          {renderText()}
          {renderImage(isRight)}
        </>
      );
    }
    return (
      <>
        {renderImage(isRight)}
        {renderText()}
      </>
    );
  };


  return (
    <TouchableOpacity style={styles.card}

      onPress={() => {
        onPress(info);
      }}
    >

      {renderContent()}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  image: {
    height: ITEM_HEIGHT,
    width: ITEM_HEIGHT,
  },
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',

  },
  right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',

  },
  title: {
    fontSize: 17,
    padding: 5,
    width: Dimensions.get('window').width - ITEM_HEIGHT - 30,
    textAlign: 'center',
  },
});
