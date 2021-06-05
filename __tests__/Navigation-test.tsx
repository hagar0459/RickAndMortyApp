import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import {Navigation} from '../src/Navigation';

describe('Testing react navigation', () => {
  test('page contains the header', async () => {
    const component = (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );

    const { findByPlaceholderText } = render(component);

    const header = await findByPlaceholderText('search...');

    expect(header).toBeTruthy();
  });

  test('clicking on one character takes you to the details screen for this character', async () => {
    const component = (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );

    const { findByText } = render(component);
    const toClick = await findByText('Item number 5');

    fireEvent(toClick, 'press');
    const newHeader = await findByText('Showing details for 5');
    const charachterDetailsEpisodeTitle = await findByText('Episods:');

    expect(newHeader).toBeTruthy();
    expect(charachterDetailsEpisodeTitle).toBeTruthy();
  });
});