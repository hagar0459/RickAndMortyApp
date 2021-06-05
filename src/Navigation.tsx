
/**
 * @flow
 * Created by Hagar Abdelghafar on 04.07.2020
 */
import * as React from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/EvilIcons';
import { CharactersListScreen } from './screens/CharacterList/CharactersListScreen';



export const NAVIGATION_CHARACTERS_LIST_ROUTE = 'NAVIGATION_CHARACTERS_LIST_ROUTE';

export type RootStackParamList = {

  [NAVIGATION_CHARACTERS_LIST_ROUTE]: {

  };


};


const Stack = createStackNavigator<RootStackParamList>();



export type CharacterListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  typeof NAVIGATION_CHARACTERS_LIST_ROUTE
>;




const RootStack = () => {

  return (

    <Stack.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '300',
        },
        headerBackImage: () => <Icon name="chevron-left" size={48} />,
      })}
    >
      <Stack.Screen
        name={NAVIGATION_CHARACTERS_LIST_ROUTE}
        component={CharactersListScreen}
        options={({ navigation, route }) => ({
          title: 'Rick & Marty'
        })}

      />


    </Stack.Navigator>
  );
};

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
