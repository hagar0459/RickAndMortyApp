import * as React from 'react';
import { CharactersListScreen } from '../src/screens/CharacterList/CharactersListScreen';
import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import {MockedProvider} from '@apollo/client/testing';
import {SEARCH_CHARACTER} from '../src/graphql/queries/requests';
import { FlatList ,TextInput} from 'react-native';
import{CharacterListItem} from '../src/components/CharacterListItem'

async function wait(ms = 0) {
  await renderer.act(() => {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  });
}

describe('Testing CharactersList', () => {


it('Screen Shows FlatList', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharactersListScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(FlatList)).not.toThrow();
  });

it('Screen Shows InputText', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharactersListScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(TextInput)).not.toThrow();
  });

it('Screen Shows CharcterListItem', () => {
    const component = renderer.create(
      <MockedProvider>
        <CharactersListScreen />
      </MockedProvider>,
    );

    expect(() => component.root.findByType(CharacterListItem)).not.toThrow();
  });

it('Shows Characters List ', async () => {
    const mockedData = {
      request: {
        query: SEARCH_CHARACTER,
        variables: { 
          page: 1,
          name: ''}
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
      <MockedProvider mocks={[mockedData]} addTypename={false} >
        <CharactersListScreen />
      </MockedProvider>,
    );

    await wait();

    console.log(component.toJSON());
    expect(() => {
      component.root.findByProps({
        children: 'Rick Sanchez',
      });
    });
  });
  it('Shows Characters List with Serach Option', async () => {
    const mockedData = {
      request: {
        query: SEARCH_CHARACTER,
        variables: { 
          page: 1,
          name: 'Rick'}
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
                "name": "Adjudicator Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
                "id": "8"
              },
              {
                "name": "Alien Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
                "id": "15"
              },
              {
                "name": "Antenna Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
                "id": "19"
              },
              {
                "name": "Aqua Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
                "id": "22"
              },
              {
                "name": "Black Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
                "id": "48"
              },
              {
                "name": "Bootleg Portal Chemist Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/56.jpeg",
                "id": "56"
              },
              {
                "name": "Commander Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
                "id": "69"
              },
              {
                "name": "Cool Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/72.jpeg",
                "id": "72"
              },
              {
                "name": "Cop Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/74.jpeg",
                "id": "74"
              },
              {
                "name": "Cowboy Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
                "id": "78"
              },
              {
                "name": "Cronenberg Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
                "id": "82"
              },
              {
                "name": "Cyclops Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
                "id": "86"
              },
              {
                "name": "Doofus Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
                "id": "103"
              },
              {
                "name": "Evil Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
                "id": "119"
              },
              {
                "name": "Garment District Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/135.jpeg",
                "id": "135"
              },
              {
                "name": "Insurance Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
                "id": "164"
              },
              {
                "name": "Investigator Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
                "id": "165"
              },
              {
                "name": "Juggling Rick",
                "image": "https://rickandmortyapi.com/api/character/avatar/187.jpeg",
                "id": "187"
              },
              {
                "name": "Maximums Rickimus",
                "image": "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
                "id": "215"
              }
            ],
            "info": {
              "next": 2,
              "count": 84
            }
          }
        },
      },
    };
    const component = renderer.create(
      <MockedProvider mocks={[mockedData]} addTypename={false} >
        <CharactersListScreen />
      </MockedProvider>,
    );

    await wait();

    console.log(component.toJSON());
    expect(() => {
      component.root.findByProps({
        children: 'Aqua Rick',
      });
    });
  });

it('Screen Have TextInput With Place Holder', async () => {
    const component = (
        <CharactersListScreen />
    );

    const { findByPlaceholderText } = render(component);

    const header = await findByPlaceholderText('search...');

    expect(header).toBeTruthy();
  });

it("Search For A Character When The Character Name is Typed", () => {
    const { getByPlaceholderText,getAllByText } = render(<CharactersListScreen />);
    fireEvent.changeText(getByPlaceholderText("search..."), "rick");
    expect(getAllByText("rick")).toHaveLength(1);
  }); 

//pagination (onEndReach )
//errors handling 
});