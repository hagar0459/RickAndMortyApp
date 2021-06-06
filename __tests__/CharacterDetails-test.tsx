import * as React from 'react';
import {CharacterDetailsScreen  } from '../src/screens/CharacterDetails/CharacterDetailsScreen';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';
import {GET_CHARACTER_DETAILS} from '../src/graphql/queries/requests';
import {FlatList ,Image} from 'react-native';
import{CharacterDetailsItem} from '../src/components/CharacterDetailsItem'
import{EpisodInfoItem} from '../src/components/EpisodInfoItem'

async function wait(ms = 0) {
  await renderer.act(() => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}

describe('Testing CharacterDetailsScreen', () => {

it('Screen Shows FlatList', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(FlatList)).not.toThrow();
  });

it('Screen Shows Image', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(Image)).not.toThrow();
  });

it('Screen Shows EpisodInfoItem', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(EpisodInfoItem)).not.toThrow();
  });

it('Screen Shows CharacterDetailsItem', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(CharacterDetailsItem)).not.toThrow();
  });

it('shows CHARACTER DETAILS', async () => {
    const mockedData = {
      request: {
        query: GET_CHARACTER_DETAILS,
        variables: { 
          id: 1}
      },
      result: {
        "data": {
          "characters": {
            "results": [
              {
                "name": "Rick Sanchez",
                "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
                "id": "1"
              },
              {
                "name": "Morty Smith",
                "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
                "id": "2"
              },
              {
                "name": "Summer Smith",
                "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
                "id": "3"
              },
              {
                "name": "Beth Smith",
                "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
                "id": "4"
              },
              {
                "name": "Jerry Smith",
                "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
                "id": "5"
              },
              {
                "name": "Abadango Cluster Princess",
                "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
                "id": "6"
              },
              {
                "name": "Abradolf Lincler",
                "image": "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
                "id": "7"
              },
              {
                "name": "Adjudicator Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "id": "8"
              },
              {
                "name": "Agency Director",
                "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
                "id": "9"
              },
              {
                "name": "Alan Rails",
                "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
                "id": "10"
              },
              {
                "name": "Albert Einstein",
                "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
                "id": "11"
              },
              {
                "name": "Alexander",
                "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
                "id": "12"
              },
              {
                "name": "Alien Googah",
                "image": "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
                "id": "13"
              },
              {
                "name": "Alien Morty",
                "image": "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
                "id": "14"
              },
              {
                "name": "Alien Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "id": "15"
              },
              {
                "name": "Amish Cyborg",
                "image": "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
                "id": "16"
              },
              {
                "name": "Annie",
                "image": "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
                "id": "17"
              },
              {
                "name": "Antenna Morty",
                "image": "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
                "id": "18"
              },
              {
                "name": "Antenna Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "id": "19"
              },
              {
                "name": "Ants in my Eyes Johnson",
                "image": "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
                "id": "20"
              }
            ],
            "info": {
              "next": 2,
              "count": 671
            }
          }
        },
      },
    };
    const component = renderer.create(
      <MockedProvider mocks={[mockedData]} addTypename={false}>
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    await wait();

    console.log(component.toJSON());
    expect(() => {
   
    });

  });


});