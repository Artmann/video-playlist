import React from 'react';
import SearchForm from './search-form';
import { render, fireEvent } from '@testing-library/react';

describe('SearchForm', () => {
  it.only('calls onSubmit when the user enters a URL', () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <SearchForm onSubmit={ onSubmit } />
    );

    const form = getByTestId('search-form');
    const input = getByTestId('search-input');

    fireEvent.change(input, {
      target: {
        value: 'https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h'
      }
    });

    fireEvent.submit(form);

    expect(onSubmit).toHaveBeenCalledWith('https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h');
  });
});
