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

it('Shows Charcter Details', async () => {
    const mockedData = {
      request: {
        query: GET_CHARACTER_DETAILS,
        variables: { 
          id: 1}
      },
      result: {
        "data": {
          "character": {
            "name": "Rick Sanchez",
            "id": "1",
            "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            "gender": "Male",
            "species": "Human",
            "episode": [
              {
                "air_date": "December 2, 2013",
                "name": "Pilot"
              },
              {
                "air_date": "December 9, 2013",
                "name": "Lawnmower Dog"
              },
              {
                "air_date": "December 16, 2013",
                "name": "Anatomy Park"
              },
              {
                "air_date": "January 13, 2014",
                "name": "M. Night Shaym-Aliens!"
              },
              {
                "air_date": "January 20, 2014",
                "name": "Meeseeks and Destroy"
              },
              {
                "air_date": "January 27, 2014",
                "name": "Rick Potion #9"
              },
              {
                "air_date": "March 10, 2014",
                "name": "Raising Gazorpazorp"
              },
              {
                "air_date": "March 17, 2014",
                "name": "Rixty Minutes"
              },
              {
                "air_date": "March 24, 2014",
                "name": "Something Ricked This Way Comes"
              },
              {
                "air_date": "April 7, 2014",
                "name": "Close Rick-counters of the Rick Kind"
              },
              {
                "air_date": "April 14, 2014",
                "name": "Ricksy Business"
              },
              {
                "air_date": "July 26, 2015",
                "name": "A Rickle in Time"
              },
              {
                "air_date": "August 2, 2015",
                "name": "Mortynight Run"
              },
              {
                "air_date": "August 9, 2015",
                "name": "Auto Erotic Assimilation"
              },
              {
                "air_date": "August 16, 2015",
                "name": "Total Rickall"
              },
              {
                "air_date": "August 23, 2015",
                "name": "Get Schwifty"
              },
              {
                "air_date": "August 30, 2015",
                "name": "The Ricks Must Be Crazy"
              },
              {
                "air_date": "September 13, 2015",
                "name": "Big Trouble in Little Sanchez"
              },
              {
                "air_date": "September 20, 2015",
                "name": "Interdimensional Cable 2: Tempting Fate"
              },
              {
                "air_date": "September 27, 2015",
                "name": "Look Who's Purging Now"
              },
              {
                "air_date": "October 4, 2015",
                "name": "The Wedding Squanchers"
              },
              {
                "air_date": "April 1, 2017",
                "name": "The Rickshank Rickdemption"
              },
              {
                "air_date": "July 30, 2017",
                "name": "Rickmancing the Stone"
              },
              {
                "air_date": "August 6, 2017",
                "name": "Pickle Rick"
              },
              {
                "air_date": "August 13, 2017",
                "name": "Vindicators 3: The Return of Worldender"
              },
              {
                "air_date": "August 20, 2017",
                "name": "The Whirly Dirly Conspiracy"
              },
              {
                "air_date": "August 27, 2017",
                "name": "Rest and Ricklaxation"
              },
              {
                "air_date": "September 10, 2017",
                "name": "The Ricklantis Mixup"
              },
              {
                "air_date": "September 17, 2017",
                "name": "Morty's Mind Blowers"
              },
              {
                "air_date": "September 24, 2017",
                "name": "The ABC's of Beth"
              },
              {
                "air_date": "October 1, 2017",
                "name": "The Rickchurian Mortydate"
              },
              {
                "air_date": "November 10, 2019",
                "name": "Edge of Tomorty: Rick, Die, Rickpeat"
              },
              {
                "air_date": "November 17, 2019",
                "name": "The Old Man and the Seat"
              },
              {
                "air_date": "November 24, 2019",
                "name": "One Crew Over the Crewcoo's Morty"
              },
              {
                "air_date": "December 8, 2019",
                "name": "Claw and Hoarder: Special Ricktim's Morty"
              },
              {
                "air_date": "December 15, 2019",
                "name": "Rattlestar Ricklactica"
              },
              {
                "air_date": "May 3, 2020",
                "name": "Never Ricking Morty"
              },
              {
                "air_date": "May 10, 2020",
                "name": "Promortyus"
              },
              {
                "air_date": "May 17, 2020",
                "name": "The Vat of Acid Episode"
              },
              {
                "air_date": "May 24, 2020",
                "name": "Childrick of Mort"
              },
              {
                "air_date": "May 31, 2020",
                "name": "Star Mort: Rickturn of the Jerri"
              }
            ]
          }
        },
      },
    };
    const component = renderer.create(
      <MockedProvider mocks={[mockedData]} addTypename={false} >
        <CharacterDetailsScreen />
      </MockedProvider>,
    );

    await wait();

    console.log(component.toJSON());
    expect(() => {
      component.root.findByProps({
        children: 'Male',
      });
    });
  
  });


});