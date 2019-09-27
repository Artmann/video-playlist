import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from './home';

describe('Home', () => {
  it('goes to a playlist when the user searches.', () => {
    const history = {
      push: jest.fn()
    };
    const { getByTestId } = render(
      <Home history={ history } />
    );

    const form = getByTestId('search-form');
    const input = getByTestId('search-input');

    fireEvent.change(input, {
      target: {
        value: 'https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h/12j3?sni=12k300ad'
      }
    });

    fireEvent.submit(form);

    expect(history.push).toHaveBeenCalledWith('/playlist/7sSm6n8UZF2mTyzP2VNa1h');
  });

  it('Does nothing for non Spotify URLs', () => {
    const history = {
      push: jest.fn()
    };
    const { getByTestId } = render(
      <Home history={ history } />
    );

    const form = getByTestId('search-form');
    const input = getByTestId('search-input');

    fireEvent.change(input, {
      target: {
        value: 'https://google.com/search/123'
      }
    });

    fireEvent.submit(form);

    expect(history.push).not.toHaveBeenCalled();
  });
});
