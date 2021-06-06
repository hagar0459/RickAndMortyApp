import * as React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../src/App';
import renderer, { act } from 'react-test-renderer';
import { Navigation } from '../src/Navigation';

describe( 'Testing App Navigation', () =>
{
  it( 'clicking on one character in list screen  takes you to the details screen for this character', async () =>
  {
    // const utils = renderConversationScreen();

    const component = (
      <Navigation />
    );
    const { findByText, findByTestId } = render( component );
    const toClick = await findByTestId( 'Rick Sanchez' );
    const charachterDetailsEpisodeTitle = await findByText( 'Episods:' );

    fireEvent( toClick, 'press' );
    await act( async () =>
    {
      fireEvent( toClick, 'press' );
    } );


    expect( charachterDetailsEpisodeTitle ).toBeTruthy();
  } );

  it( 'Renders App correctly', () =>
  {
    renderer.create( <App /> );
  } );
} );