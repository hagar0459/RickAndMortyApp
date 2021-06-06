
/**
 * @flow
 * Created by Hagar Abdelghafar on 04.06.2021
 */

import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import { CharactersListScreen } from './screens/CharacterList/CharactersListScreen';
import { CharacterDetailsScreen } from './screens/CharacterDetails/CharacterDetailsScreen';



export const NAVIGATION_CHARACTERS_LIST_ROUTE = 'NAVIGATION_CHARACTERS_LIST_ROUTE';
export const NAVIGATION_CHARACTERS_DETAILS_ROUTE = 'NAVIGATION_CHARACTERS_DETAILS_ROUTE';
export type RootStackParamList = {
  [NAVIGATION_CHARACTERS_LIST_ROUTE]: undefined;
  [NAVIGATION_CHARACTERS_DETAILS_ROUTE]: {
    characterId: number;
    title: string;
  };
};



const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () =>
{
  return (
    <Stack.Navigator
      screenOptions={() => ( {
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '300',
        },
        headerBackImage: () => <Icon name="chevron-left" size={48} />,
      } )}
    >
      <Stack.Screen
        name={NAVIGATION_CHARACTERS_LIST_ROUTE}
        component={CharactersListScreen}
        options={( { } ) => ( {
          title: 'Rick & Marty'
        } )}
      />
      <Stack.Screen
        name={NAVIGATION_CHARACTERS_DETAILS_ROUTE}
        component={CharacterDetailsScreen}
        options={( { route } ) => ( {
          characterId: route?.params?.characterId,
          title: route?.params?.title ?? 'Details',
        } )}
      />
    </Stack.Navigator>
  );
};

export const Navigation: React.FC = () =>
{
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
