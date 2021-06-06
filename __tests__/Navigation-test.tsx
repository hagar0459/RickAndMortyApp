import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../src/App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Navigation} from '../src/Navigation';

describe('Testing App Navigation', () => {


  it('clicking on one character takes you to the details screen for this character', async () => {
    const component = (
        <Navigation />
    );

    const { findAllByTestId,findByText } = render(component);
    const toClick = await findAllByTestId('Rick Sanchez');

    fireEvent(toClick, 'press');
    // const newHeader = await findByText('Showing details for 5');
    const charachterDetailsEpisodeTitle = await findByText('Episods:');

    // expect(newHeader).toBeTruthy();
    expect(charachterDetailsEpisodeTitle).toBeTruthy();
  });

  it('renders correctly', () => {
    renderer.create(<App />);
  });
});