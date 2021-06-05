/**
 * @flow
 * Created by Hagar Abdelghafar on 05.06.2021
 */
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { EpisodeType } from '../graphql/queries/requests';


type Props = {
  info: EpisodeType;

};

export const EpisodInfoItem: FC<Props> = ({ info }: Props) => {

  return (
    <View style={styles.card}  >
      <Text style={styles.name}>{info.name}</Text>
      <Text style={styles.air_date}>{info.air_date}</Text>
    </View>



  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white', margin: '5%', borderRadius: 10, width: '40%', padding: 10, alignContent: 'center', alignItems: 'center'
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
