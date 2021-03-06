import { mount, shallow } from 'enzyme';

import React from "react";
import SearchForm from './search-form';

describe('SearchForm', () => {
  it.only('calls onSubmit when the user enters a URL', () => {
    const onSubmit = jest.fn();
    const preventDefault = jest.fn();
    const component = shallow(<SearchForm onSubmit={ onSubmit } />);

    component.find('#data-test-input').simulate('change', {
      currentTarget: {
        value: 'https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h'
      }
    });
    component.find('#data-test-form').simulate('submit', {
      preventDefault
    });

    expect(onSubmit).toHaveBeenCalledWith('https://open.spotify.com/playlist/7sSm6n8UZF2mTyzP2VNa1h');
    expect(preventDefault).toHaveBeenCalled();
  });
});
